import { buffer } from "micro";
import * as admin from "firebase-admin";





// secure firebase connection from the backend
const serviceAccount = require("../../../permission.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credintial: admin.credintial.cert(serviceAccount),
    })
  : admin.initializeApp();


  const fullfillOrder = async (session) => {
    return app
      .firestore()
      .collection("users")
      .doc(session.metadata.email)
      .collection(orders)
      .doc(session.id)
      .set({
        amount: session.amount_total / 100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log(
          `SUCESS: order ${session.id} has been added to the database!`
        );
      });
  };

//connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripeEndPointSecret = process.env.STRIPE_WEBHOOK;

export const webhook = async (req, res) => {
  if (req.method === "POST") {
    const requrestBuffer = await buffer(req);
    const payload = requrestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhook.constructEvent(payload, sig, stripeEndPointSecret);

      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        return fullfillOrder(session)
        .then(()=>{res.status(200)})
        .catch((err)=>{res.status(400).send(`Webhook Error: ${err.message}`)})
      }


    } catch (err) {
      console.log("ERROR", err);
      res.status(400).send(`webhook error: ${err.message}`);
    }
  }
};



export const config = {
    api: {
        bodyParse: false,
        externalResolver: true,
    }
}