const fs = require("fs")
const chatMessages = require("./chatMessages.json")

const template = (data) => {
    return `---
    author: Oskar1504
    pubDatetime: 2022-09-23T15:22:00Z
    title: ${data.title}
    postSlug: ${data.slug}
    featured: true
    draft: false
    tags:
      ${data.tags}
    ogImage: ${data.img}
    description:
      ${data.desc}
    ---
    `
}


chatMessages.forEach(msg => {
    if(msg.author == "Nolo"){
        let slug = msg.msg.split("\n\n")[0].toLowerCase().trim().split(" ").join("-").replaceAll('"','').replaceAll("\n","")
        let data = {
            title: msg.msg.split("\n\n")[0],
            slug: slug,
            tags: ["farming", "test"].join("\n- "),
            img: msg.img,
            desc: msg.msg.split("\n\n")[1]
        }
        fs.writeFileSync("./data/out/" + slug + ".md", template(data))
    }
})