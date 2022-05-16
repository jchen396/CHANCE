const router = require("express").Router();
const stripe = require("stripe")(
    "sk_test_51KyROMDUXS9AxmGD1HpDVzGHE5BXCloRhI2HRLIZ8YVsRCaBkANWph4D6Gj3IWHkw7g1swYapJqIVMXrYeQu0yay00mcbQl6mc"
);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;
