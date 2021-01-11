require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity('++commands for help');
});
 
client.on("guildMemberAdd", (member) => {
    const channel = client.channels.get("591457788220276778");
    channel.send("<@" + member.id + ">", {files: ["https://cdn.discordapp.com/attachments/591457788220276778/618472938202726428/image0.png"]});
  });

client.on("message", (message) => {

    if (message.author.bot) return;
    

  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.content.indexOf(process.env.PREFIX) !== 0) return;


  if (command === "bigtext")
  {
    var textChars = args
    var store = ""
    var string1 = " "
    for (n in textChars)
    {
      var x = textChars[n].split('')
      for (m in x)
      {
        store = store.concat(" ")
        var string1 = string1.concat(":regional_indicator_", x[m].toLowerCase(), ": ")
        store = string1
      }
      store = store.concat(" ")
    }
    message.channel.send(store)
  }
  else if (command === "welcome")
  {
    message.channel.send("https://cdn.discordapp.com/attachments/591457788220276778/618472938202726428/image0.png");
  }
  else if (command === "wheel")
  {
    var randomInt = Math.floor((Math.random() * 27) + 1);
    var names = ['jon', 'alex', 'naz', 'jamie', 'jacob', 'gabby', 'rob', 'teddy', 'cam', 'riley', 'sarah', 'ben', 'this whole server',
    'maria', 'pharaoh', 'sav', 'julia', 'ely', 'mouffin', 'freyja', 'hal', 'dani', 'micah', 'rachel', 'regina', 'vivi', 'beth']
    message.channel.send("time to oppress **" + names[randomInt] + "**!")
  }
  else if (command === "mcblock")
  {
    var randomInt = Math.floor((Math.random() * 145) + 1);
    var blocks = ['stone', 'water', 'anvil', 'cyan shulker box', 'coal ore', 'cake', 'lava', 'lapis lazuli', 'glass', 'wooden plank', 'sand', 'sandstone', 'bubble column', 'air', 'gold', 'iron', 
    'mycelium', 'soul sand', 'grass', 'dead bush', 'diamond ore', 'gold ore', 'iron ore', 'redstone ore', 'diamond', 'snow', 'ice', 'sugarcane', 
    'cactus', 'melon', 'end portal frame', 'obsidian', 'cobweb', 'wool', 'poppy', 'dandelion', 'glass pane', 'chest', 'stone stairs', 'bookshelf', 
    'mossy cobblestone', 'gravel', 'netherrack', 'glowstone', 'bedrock', 'monster spawner', 'crafting table', 'wood', 'birch wood', 'mossy stone brick', 
    'nether brick stairs', 'end stone', 'torch', 'andesite', 'quartz slab', 'pumpkin', 'sponge', 'chorus flower', 'brick', 'brick stairs', 'bone block', 
    'hay bale', 'clay', 'lime wool', 'end stone brick', 'emerald ore', 'orange wool', 'chorus plant', 'brown mushroom', 'acacia log', 'acacia fence', 'acacia wood',
    'oak fence', 'brick stairs', 'barrel', 'enchanting table', 'blue terracotta', 'brain coral block', 'dark oak log', 'dark oak leaves', 'cornflower', 
    'chiseled stone brick', 'gray terracotta', 'large fern', 'horn coral fan', 'grindstone', 'light blue wool', 'lime banner', 'nether wart block', 
    'note block', 'orange glazed terracotta', 'oak wall sign', 'orange stained glass', 'peony', 'pink banner', 'polished diorite', 'polished diorite stairs',
    'polished andesite', 'purple carpet', 'black carpet', 'purple wool', 'purple terracotta', 'purple stained glass pane', 'red sandstone', 'red sand', 'red tulip', 
    'redstone lamp', 'redstone torch', 'yellow wool', 'sea lantern', 'rosebush', 'smooth quartz slab', 'smooth quartz', 'smithing table', 'smooth stone', 
    'spruce fence', 'birch wood', 'spruce leaves', 'spruce wood', 'sticky piston', 'stripped birch log', 'stripped acacia log', 'stripped jungle log', 
    'stripped oak wood', 'tube coral block', 'tube coral fan', 'tnt', 'white glazed terracotta', 'white tulip', 'yellow concrete', 'pink stained glass', 
    'petrified oak slab', 'magenta carpet', 'magenta stained glass pane', 'lilac', 'lily pad', 'heavy weighted pressure plate', 'grey carpet', 'daylight detector',
    'grey stained glass', 'granite wall', 'fire', 'nether portal', 'dragon head', 'dead tube coral fan', 'dead fire coral block', 'dark prismarine stairs']
    message.channel.send(blocks[randomInt])
  }
  else if (command === "mcmob")
  {
    var randomInt = Math.floor((Math.random() * 100) + 1);
    var blocks = ['bat', 'cat', 'pig', 'blaze', 'salmon', 'rabbit', 'enderman', 'villager', 'slime', 'zombie horse', 'zombie', 
    'silverfish', 'drowned', 'tropical fish', 'parrot', 'witch', 'ghast', 'guardian', 'enderdragon', 'spider', 'skeleton', 
    'ender dragon', 'horse', 'snow man', 'sheep', 'donkey', 'iron golem', 'fox', 'elder guardian', 'creeper', 'wither', 'wolf', 'dolphin',
    'cave spider', 'polar bear', 'zombie pigman', 'llama', 'bee', 'arrow', 'eye of ender', 'snowball', 'turtle', 'egg', 'wheat', 
    'apple', 'pillager', 'beetroot', 'potato', 'blue dye', 'blaze rod', 'magenta dye', 'bone meal', 'book', 'carrot', 'cooked mutton', 
    'cookie', 'enchanted golden apple', 'firework rocket', 'flint and steel', 'gold horse armor', 'diamond pickaxe', 'iron sword', 
    'iron pickaxe', 'wooden shovel', 'iron shovel', 'gunpowder', 'lingering potion of strength', 'map', 'melon slice', 'magma cream', 
    'mushroom stew', 'golden sword', 'paper', 'raw pork chop', 'poisonous potato', 'potion of invisibility', 'potion of luck', 
    'potion of regeneration', 'water bottle', 'pumpkin pie', 'bucket', 'pumpkin seeds', 'nether quartz', 'leather', 'rabbit hide', 
    'redstone', 'raw salmon', 'bucket of pufferfish', 'shears', 'slimeball', 'splash potion of fire resistance', 'spectral arrow', 
    'splash potion of leaping', 'lingering potion of luck', 'stick', 'arrow of weakness', 'yellow dye', 'arrow of slowness', 
    'suspicious stew', 'pillager']
    message.channel.send(blocks[randomInt])
  }
  else if (command === "commands")
  {
    message.channel.send({embed: {
      color: 3447003,
      title: "Command List",
      description: "**PREFIX:** ++ \n **bigtext:** displays what you say in big text (NO NUMBERS OR SPECIAL CHARACTERS ALLOWED) \n **wheel:** displays random name for oppression! \n **bunny:** random elk bunny picture! \n **grim:** random agilities & kariv cat pictures...with a twist:) \n **bebe:** random sbb dog picture! \n **mcblock:** returns random minecraft block type \n **mcmob:** returns random minecraft mob type \n **other commands:** naz"
    }});
  }
  //joke commands
  else if (command === "naz")
  {
    message.channel.send("\n https://twitter.com/iCy_OW")
  }
  else if (command === "bunny")
  {
    var randomInt = Math.floor((Math.random() * 10) + 1);
    if (randomInt == 1)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/509903271448543258/Screen_Shot_2018-11-07_at_7.33.08_PM.png")
    }
    else if (randomInt == 2)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/509903273210150915/Screen_Shot_2018-11-07_at_7.32.50_PM.png")
    }
    else if (randomInt == 3)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/509903274028171267/Screen_Shot_2018-11-07_at_7.31.49_PM.png")
    }
    else if (randomInt == 4)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/509903276133842945/Screen_Shot_2018-11-07_at_7.31.36_PM.png")
    }  
    else if (randomInt == 5)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/509903295524110337/Screen_Shot_2018-11-07_at_7.32.11_PM.png")
    }
    else if (randomInt == 6)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/509903295658065930/Screen_Shot_2018-11-07_at_7.32.30_PM.png")
    }
    else if (randomInt == 7)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/509903297587707934/Screen_Shot_2018-11-07_at_7.32.02_PM.png")
    }
    else if (randomInt == 8)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510132791900504075/Screen_Shot_2018-11-08_at_10.43.53_AM.png")
    }
    else if (randomInt == 9)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510132793502728203/Screen_Shot_2018-11-08_at_10.43.43_AM.png")
    }
    else if (randomInt == 10)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510132794832453642/Screen_Shot_2018-11-08_at_10.43.31_AM.png")
    }
    else if (randomInt == 11)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510134075529363456/Screen_Shot_2018-11-08_at_10.50.24_AM.png")
    }
    else if (randomInt == 12)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510134076951232531/Screen_Shot_2018-11-08_at_10.50.17_AM.png")
    }
  }
  else if (command === "grim")
  {
    var randomInt = Math.floor((Math.random() * 14) + 1);
    if (randomInt == 1)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510138394861633566/Screen_Shot_2018-11-08_at_11.00.01_AM.png")
    }
    if (randomInt == 2)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510139210594910229/Screen_Shot_2018-11-08_at_11.09.29_AM.png")
    }
    if (randomInt == 3)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510139215690858539/Screen_Shot_2018-11-08_at_11.09.20_AM.png")
    }
    if (randomInt == 4)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510139235177857024/Screen_Shot_2018-11-08_at_11.10.48_AM.png")
    }
    if (randomInt == 5)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510139236188553237/Screen_Shot_2018-11-08_at_11.10.32_AM.png")
    }
    if (randomInt == 6)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510139237576998925/Screen_Shot_2018-11-08_at_11.10.06_AM.png")
    }
    if (randomInt == 7)
    {
      message.channel.send("https://twitter.com/KarivOW/status/1049755006352556032")
    }
    if (randomInt == 8)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510139239690666024/Screen_Shot_2018-11-08_at_11.09.45_AM.png")
    }
    if (randomInt == 9)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510139240529526795/Screen_Shot_2018-11-08_at_11.09.39_AM.png")
    }
    if (randomInt == 10)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510139959848730624/Screen_Shot_2018-11-08_at_11.13.52_AM.png")
    }
    if (randomInt == 11)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510140189763698689/Screen_Shot_2018-11-08_at_11.14.44_AM.png")
    }
    if (randomInt == 12)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/448620546448687108/510140425751756830/Screen_Shot_2018-11-08_at_11.15.36_AM.png")
    }
    if (randomInt == 13)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510141834140581888/image2.png")
    }
    if (randomInt == 14)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510141833418899466/image0.png")
    }
    if (randomInt == 15)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510142595633119236/image3.png")
    }
    if (randomInt == 16)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510142596937678848/image5.png")
    }
    if (randomInt == 17)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510142598032130058/image7.png")
    }
    if (randomInt == 18)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510142595633119232/image2.png")
    }
    if (randomInt == 19)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/448620546448687108/510143332966727682/Cs6pAJ7UAAAx-M6.jpg")
    }

  }
  else if (command === "bebe")
  {
    var randomInt = Math.floor((Math.random() * 25) + 1);
    if (randomInt == 1)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/448620546448687108/510146149219434536/Screen_Shot_2018-11-08_at_11.37.46_AM.png")
    }
    if (randomInt == 2)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/448620546448687108/510147545431932929/Screen_Shot_2018-11-08_at_11.43.41_AM.png")
    }
    if (randomInt == 3)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/448620546448687108/510147546015072276/Screen_Shot_2018-11-08_at_11.43.36_AM.png")
    }
    if (randomInt == 4)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510148160589529129/image0.png")
    }
    if (randomInt == 5)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510148171456839682/image0.png")
    }
    if (randomInt == 6)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510148774992281611/Screen_Shot_2018-11-08_at_11.48.51_AM.png")
    }
    if (randomInt == 7)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510148776393048076/Screen_Shot_2018-11-08_at_11.48.45_AM.png")
    }
    if (randomInt == 8)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149063266664456/image0.png")
    }
    if (randomInt == 9)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149063266664459/image1.png")
    }
    if (randomInt == 10)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149065212821518/image4.png")
    }
    if (randomInt == 11)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149198071726105/image0.png")
    }
    if (randomInt == 12)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149198713323603/image2.png")
    }
    if (randomInt == 13)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149199292006405/image4.png")
    }
    if (randomInt == 14)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149716076527644/image2.png")
    }
    if (randomInt == 15)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149717095874590/image4.png")
    }
    if (randomInt == 16)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149769608560651/image1.png")
    }
    if (randomInt == 17)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510149770338238464/image2.png")
    }
    if (randomInt == 18)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/502659886962704394/510150051377446928/image0.png")
    }
    if (randomInt == 19)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/460935719506935840/510151486185930755/Screen_Shot_2018-11-08_at_11.59.36_AM.png")
    }
    if (randomInt == 20)
    {
      message.channel.send("https://twitter.com/saebyeolbe/status/1024334885383598080")
    }
    if (randomInt == 21)
    {
      message.channel.send("https://twitter.com/saebyeolbe/status/1003167698111492097")
    }
    if (randomInt == 22)
    {
      message.channel.send("https://twitter.com/saebyeolbe/status/997761833896366080")
    }
    if (randomInt == 23)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/460935719506935840/510152803243524097/Screen_Shot_2018-11-08_at_12.03.46_PM.png")
    }
    if (randomInt == 24)
    {
      message.channel.send("https://twitter.com/AndrewKimOW/status/988106033263448064")
    }
    if (randomInt == 25)
    {
      message.channel.send("https://cdn.discordapp.com/attachments/475405535819071492/510153682965495838/Screen_Shot_2018-11-08_at_12.08.22_PM.png")
    }
  }
});

client.login();
