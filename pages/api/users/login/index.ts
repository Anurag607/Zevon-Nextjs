import { NextApiRequest, NextApiResponse } from "next";
import nc from 'next-connect'
import data from '../../../../src/data/data.json'
import { readFile, writeFile } from 'fs/promises'

// const handler = nc<NextApiRequest, NextApiResponse>({
//     onError(error, req, res) {
//         res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
//     },
//       onNoMatch(req, res) {
//         res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
//     },
// })

const handler = nc<NextApiRequest, NextApiResponse>()

handler.get('/api/users/login', async(req,res) => {
    console.log("Running")
    res.status(200).json("HELLO!")
})

handler.post('/api/users/login', async(req, res) => {
    let userData:string = '';
    try {
        userData = await readFile(new URL('./src/data/data.json', import.meta.url), 'utf-8')
    } catch(err) {
        console.error(err.message)
        res.send('Error while logging in (R).')
    }

    let users = JSON.parse(userData)
    if(users.hasOwnProperty(req.body.username)) {
        if (users[req.body.username] === req.body.password) {
            console.log('success')
            res.send('success')
        } else {
            res.send('invalid password')                    
        }
    } else {
        res.send('invalid username')
    }
})

export default handler