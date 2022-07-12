import {User} from '../Model/User.js';

export async function updateUserProfile(req,res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body)
      const new_user = await User.findById(req.params.id)
      res.status(200).send(new_user)
    } catch (err) {
      res.status(500).send({error: "Problem with Updating User recored "})
    }
  }

  
