import dotenv from 'dotenv';
import OpenAI from 'openai';//模块引入放在头部，不会重复

// .env 本项目 环境变量配置文件
dotenv.config();
// 全面es6
// 全局环境对象
const{
    OPENAI_API_KEY,
    OPENAI_BASE_URL
} = process.env

const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
    baseURL: OPENAI_BASE_URL,
});

// get_conmletion 函数封装
// async 是 es7
const get_completion =
async(prompt,model= 'gpt-3.5-turbo')=>{
    // 创建一个包含用户角色和提示内容的消息数组
    const messages=[
        {role: 'user', content: prompt}
    ]

    const response = await client.chat.completions.create({
        model,
        messages,
        temperature: 0,
    });

    return response.choices[0].message.content;
}

const main =async () => {
    // nlp 情感分析
    const sentiment = 'negative' // 消极
    const review = `
  因此，他们仍然以 10-70 左右的价格在季节性销售，价格也比之前的 29 美元低。
  所以它看起来还不错，但如果你看看底座，刀片锁定到位的部分看起来不如几年前的版本那么好，但我打算非常温柔地使用它（例如，我先在搅拌机中粉碎非常硬的物品，如豆子、冰、米饭等。然后在搅拌机中将它们粉碎成我想要的份量，然后切换到搅拌刀片以获得更细的面粉，并在制作冰沙时先使用十字切割刀片，然后如果我需要它们更细/更少的浆状，则使用平刀片）。制作冰沙的特别提示：将水果和蔬菜切碎并冷冻（如果使用菠菜，请稍微炖一下，然后冷冻直至可以使用；如果制作冰糕，请使用小型或中型食品加工机），这样就可以避免在制作冰沙时添加太多冰块。
  大约一年后，电机发出奇怪的声音。
  我打电话给客服，但保修期已过，所以我不得不再买一个。仅供参考：这类产品的整体质量已经下降，因此他们有点指望品牌认知度和消费者忠诚度来维持销售。大约两天后就收到了。
  `

  const prompt =`
    你是一个客服AI助理。
    你的任务是向尊贵的客户发送电子邮件回复。
    给定以'''分割的评论的客户发送电子邮件，
    生成回复以感谢客户的评论。
    如果情绪是正面或中性的,感谢他们的评论。
    如果情绪是负面的,道歉并建议他们可以联系客服。
    确保使用评论中的具体细节。
    用简洁专业的语气写作。
    在电子邮件中签名为"AI客户代理"
    客户评论:'''${review}'''
    评论情绪:${sentiment}
  `

  const response =await get_completion(prompt);
  console.log(response);
}

main()