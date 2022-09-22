# A Simple Lightweight Package to Simplify working with Line Notify

## Example
```typescript
const lineNotify = require('simple-line-notify')

const main = async () => {
    // insert API key
    const lineDevGroup = new lineNotify('Bearer xxxxxxxxxxxxxxxxxx')
    const lineCommunityGroup = new lineNotify('Bearer xxxxxxxxxxxxxxxxx')

    // input the message
    const res1 = await lineDevGroup.send(JSON.stringify({error: "Uncaught TypeError: undefined is not a function"}))
    const res2 = await lineCommunityGroup.send("Hello My Community")
    
    // logging out the results
    console.log(res1)
    console.log(res2)
}

main()
```