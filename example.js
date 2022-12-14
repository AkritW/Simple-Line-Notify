const lineNotify = require('simple-line-notify')

const main = async () => {
    // insert API key
    const lineCommunityGroup = new lineNotify('Bearer xxxxxxxxxxxxxxxxx')
    const lineDevGroup = new lineNotify('Bearer xxxxxxxxxxxxxxxxxx')

    // send message
    const res1 = await lineDevGroup.send(JSON.stringify({ error: 'Uncaught TypeError: undefined is not a function' }))
    const res2 = await lineCommunityGroup.send('Hello My Community')

    // send sticker
    const res3 = await lineCommunityGroup.sendSticker('Happy New Year 🎉', 446, 1992)

    // send image
    const res4 = await lineCommunityGroup.sendImage('Here is a Cat picture!', 'https://i.ytimg.com/vi/fOd16PT1S7A/maxresdefault.jpg')
    
    // log
    console.log(res1)
    console.log(res2)
    console.log(res3)
    console.log(res4)
}

main()