export default function hello(req,res) {
    console.log("HELLO")
    res.status(200).json("HELLO")
}