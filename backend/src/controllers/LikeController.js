import Dev from '../models/Dev'

export default {
  async store(req, res) {
    const { 
      params: {devId}, 
      headers: {user} 
    } = req

    const loggedDev = await Dev.findById(user)
    const targetDev = await Dev.findById(devId)
    
    if(!targetDev) return res.status(400).json({error: 'Dev not exists'})
    
    if(targetDev.likes.includes(loggedDev._id)) console.log('Deu match!!')

    loggedDev.likes.push(targetDev._id)
    await loggedDev.save()
    
    return res.json({ loggedDev })
  }
}
