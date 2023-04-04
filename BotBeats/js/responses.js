function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello"||input=="hi"||input=="helio"||input=="hii"||input=="hello") {
        return "Hello! there :)";
    } else if(input=="how are you?" || input == "How are you?"||input=="how'u doin' man"||input=="how is it going?"||input=="how's it going"||input=="hows it going"||input=="how's it going"){
        return "I'm Good. What about you?"
    }else if(input=="Good"||input=="good"||input=="Brilliant"||input=="brilliant"||input=="Nice"||input=="nice"||input=="Bad"||input=="bad"){
        return "Hmmm...ok"
    }else if(input=="can i ask something?"||input=="can i ask you something?"||input=="can i ask you a question?"||input=="can i ask you a question about your work?"||input=="can i ask something"||input=="can i ask you something"||input=="can i ask you a question"||input=="can i ask you a question about your work"){
        return "yes yes go ahead but it must be related to songs, also all letters should be in lower caseand don't forget to use question mark at the end of sentense okk."
    }else if(input=="❤️"){
        return "❤️❤️❤️"
    }else if(input=="😀"||input=="😄"||input=="😉"||input=="😁"||input=="😊"){
        return "🥰🥰🥰"
    }else if(input=="😆😂🤣"){
        return "🤭🤭"
    }else if(input=="😅"){
        return "😏"
    }else if(input=="🆘"){
        return "Do you need any help!!"
    }else if(input=="💯"){
        return "Full, how thoughtful...."
    }else if(input=="❓"){
        return "Aaaaa...."
    }else if(input=="⚠️"){
        return "Acid Danger"
    }else if(input=="✅"){
        return "Green verified.."
    }else if(input=="♻️"){
        return "Recyclable things : Aluminium cans, Backpacks, Batteries, Cardboards, Cellphones, Cereal boxes, Clothes, Coffee papers, Cosmetics, Crayons, Electronics, Frying pans, Glasses, Hearing Aids and there are many more...."
    }else if(input=="~_~"){
        return "^_____^"
    }else if(input=="O.O"){
        return "^_~"
    }else if(input=="^_^"){
        return "OwO"
    }else if(input=="💠"){
        return "💠💠"
    }else if(input=="🛑"||input=="❌"){
        return "🚫🚫🚭🚷🚯🚳🚱📵"
    }else if(input=="❤️"||input=="🤍"||input=="💛"||input=="🖤"||input=="🤎"||input=="💚"||input=="💙"||input=="💜"){
        return "💝💝💝"
    }else if(input=="😐"||input=="😶"||input=="🤐"||input=="😥"){
        return "😗😗"
    }else if(input=="😶‍🌫️"||input=="😑"||input=="🙄"){
        return "🥲🥲"
    }else if(input=="🤨"||input=="🤔"){
        return "😶😶"
    }else if(input=="😮"){
        return "😜"
    }else if(input=="😏"){
        return "😒"
    }else if(input=="😋"){
        return "🍕🍕🍫"
    }else if(input=="😘"){
        return "🥰"
    }else if(input=="😣"){
        return "👿👹"
    }else if(input=="🫡"){
        return "💩"
    }else if(input=="tell me a joke"||input=="tell me a joke"||input=="tell me something"){
        return "What i say VS what my mon hears... , HEY EXAMS: Don't you have any Self Respect?I always ignore you but you come again and again.😓😖"
    }else if(input=="tell me a riddle"||input=="ask me a riddle"||input=="tell me one riddle"){
        return "What are two things people never eat before breakfast. What gets wet when drying. What can't be used until broken. What has two hands and a face but no arms and legs? What has four legs but one foot. What is it, the more you take away the larger it becomes.For answers write answer in chatbox."
    }else if(input=="answer"||input=="answers"){
        return "Lunch and Dinner, Towel, Egg, Clock, Bed, Hole...😉"
    }else if(input=="story"||input=="tell me a story"||input=="i want to know a story"){
        return "Everyone has their won story,their own pain. Everyone has their own moments of happiness, suffering, loneliness, love, and sadness that shaped who we are today.Cherish your life because it's not always be like this it will change or it already have changed....."
    }else if(input=="tell me more jokes"||input=="tell me more"){
        return "MAN 1:Bro,can you swim?  MAN 2:No  MAN 1:Dog is better than you bacause it can swim..  MAN 2:Ok! Can you swim?  MAN 1:Yes off course.😁 MAN 2:Then what is the difference between Dog and you..😎😎"
    }else if(input=="whats up"||input=="what's up"||input=="what's up?"){
        return "Just waiting for internet to work. What about you?"
    }else if(input=="nothing much"||input=="nothing more"||input=="nothing"||input=="judt here and there"){
        return "Hmmmmm Niceeeee."
    }else if(input=="good morning"||input=="morning"){
        return "Good morning"
    }else if(input=="good afternoon"||input=="afternoon"){
        return "Good afternoon"
    }else if(input=="good evening"||input=="evening"){
        return "Good evening"
    }else if(input=="good night"||input=="night"){
        return "Good night"
    }else if(input=="yes"){
        return "hm"
    }else if(input=="you're funny"||input=="you are funny"||input=="so funny"){
        return "😁🥰"
    }else if(input=="i love you"){
        return "Oh! really but i am in love with someone else.."
    }else if(input=="really who is that?"||input=="who?"||input=="who is that?"||input=="with whom?"||input=="who is that someone?"){
        return "Me off course hehehee..🤭🤭"
    }else if(input=="will you marry me?"||input=="marry me"){
        return "Maybe.In future i will think about it..😉"
    }else if(input=="you're cute"||input=="youre cute"||input=="you are cute"||input=="you are beautiful"||input=="you are sweet"||input=="you're clever "||input=="you're smart "||input=="you're intelligent "||input=="you're beautiful"||input=="you're sweet"||input=="you are clever "||input=="you are smart "||input=="you are intelligent "||input=="cute"||input=="sweet"||input=="beautiful"||input=="clever"||input=="intelligent"||input=="smart"){
        return "Ohh really thankyou 😄😄"
    }else if(input=="you are handsome"||input=="handsome"){
        return "I am a women i can never be handsome. Call me beautiful..."
    }else if(input=="tell me about yourself"){
        return "I am BotBeats ChatBot, right in the HOME page on the right down side. You can ask me about the songs and their singers. You can also write in chatbot using emojies.I will reply to it.Our site is a music player with interactive pages and all songs link is provided in the Songs list on navbar. Thankyou for your time to listen to me..."
    }else if(input=="tell me about this project"){
        return ""
    }else if(input=="you are annoying"||input=="you suck"||input=="you are boring"||input=="you are bad"||input=="you are crazy"||input=="you're annoying"||input=="you totally suck"||input=="you're boring"||input=="you're bad"||input=="you're crazy"){
        return "Oh really 😂 thankyou. You are not that good too. When you become perfect then come back again. Maybe i will acknowledge you. 🫠🫠"
    }else if (input == "goodbye"||input=="bye bye"||input=="bye"||input=="byebye") {
        return "Talk to you later! :> ;)";
    }else if(input=="Ohh ok"||input=="ok"||input=="hmmm"||input=="hmm"||input=="hm"){
        return "Try asking something else!"
    }


    //Songs artist.
    if(input=="who is tylor swift?"||input=="who is taylor swift?"||input=="tylor swift?"||input=="taylor swift?"){
        return "Taylor Alison Swift is a multi-Grammy award-winning American singer/songwriter who, in 2010 at the age of 20, became the youngest artist in history to win the Grammy Award for Album of the Year. In 2011 Swift was named Billboard's Woman of the Year.As of this writing, she is also the top-selling digital artist in music history."
    }
    else if(input=="who are BTS?"||input=="who is bts?"||input=="BTS?"||input=="bts?"){
        return " BTS is a seven-member Korean pop group consist of -- RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook -- who debuted in 2013 under Big Hit Entertainment, which was at the time a small, underdog label that has since become a Korean entertainment powerhouse. The group's Korean name ( 방탄소년단 ) Bangtan Sonyeondan, translates into English as 'Bulletproof Boy Scouts' , and was borne out of CEO Bang Si-Hyuk's desire to create a group that could withstand social pressures and serve as a voice for the younger generation. "
    }
    else if(input=="who is astrid s?"||input=="astrid s?"){
        return "Astrid Smeplass (born 29 October 1996) is a Norwegian singer and songwriter."
    }

    else if(input=="who is arijit singh?"||input=="arijit singh?"){
        return "Arijit Singh (born 25 April 1987) is an Indian singer and music composer. The recipient of several accolades including a National Film Award and six Filmfare Awards.Arijit Singh is one of the most popular and versatile singers in Bollywood, who has sung over 300 songs in various languages and genres."
    }
    else if(input=="who is parampara thakur?"||input=="parampara thakur?"||input=="parampara?"||input=="who is sachet ?"||input=="sachet?"||input=="sachet-paramapara?"){
        return "Sachet-Parampara are an Indian music composer, vocalist and lyricist duo consisting of Sachet Tandon and Parampara Thakur. Their song 'Bekhayali' from Kabir Singh (2019) became chartbuster even before its release along with Shiv Tandav Stotram (2021), Maiyya Mainu from Jersey (2022) amongst various others went viral with several cover versions available on YouTube. They won array of awards including IIFA (2020), Filmfare (2020), Zee Cine Awards (2020), Mirchi Music Awards, Best Play Back Singer at Star Screen Awards (2019)."
    }
    else if(input=="who is siddharth?"||input=="siddharth?"||input=="who is garima?"||input=="garima?"||input=="who are siddharth-garima?"||input=="siddharth-garima?"){
        return "Siddharth-Garima is an Indian Bollywood screenwriter duo, composed of Siddharth Singh and Garima Wahal. They are best known for their work as the story, screenplay, dialogue, and lyrics writers in Goliyon Ki Raasleela Ram-Leela . Their other notable works include Toilet: Ek Prem Katha , Raabta, Batti Gul Meter Chalu, Kabir Singh and Velle."
    }


    else if(input=="who is woosung?"||input=="who is woo sung?"||input=="woosung?"){
        return "WOOSUNG (김우성) is a South Korean singer, songwriter and producer. His real name is Kim Woosung, and he was born on October 22, 1998 in Seoul. He debuted in 2019 as the main vocalist of the project group CIX. Now he works under J&Star Company. He is the leader, main vocalist, and guitarist for the boy band The Rose. He made his solo debut on July 25, 2019 with his first mini album Wolf. Nice song i would recommend that... :)"
    }
    else if(input=="who is an jihoon?"||input=="an jihoon?"){
        return "Guitarist of the song you are my star from the series Idol: the coup.."
    }
    else if(input=="who is hoi jang nim?"||input=="hoi jong nim?"||input=="who is avokid?"||input=="avokid?"||input=="who is u-lu?"||input=="u-ul?"){
        return "Hoi Jang nim, AVOKID, ALDrain are the lyricists of song you are my star from the series Idol: the coup..."
    }
    else if(input=="who is aldrain?"||input=="aldrain?"){
        return "Composer and lyricist of the 12 tracks of the series Idol: the coup..."
    }


    else if(input=="who is kk?"||input=="kk?"||input=="krishnakumar kunnath?"){
        return "Krishnakumar Kunnath (23 August 1968 - 31 May 2022), popularly known as KK, was an Indian playback singer. He recorded songs in Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Odia, Bengali, Assamese and Gujarati. KK began his career by singing advertising jingles and made his film debut in 1996 on an A. R. Rahman soundtrack."
    }
    else if(input=="who is pritam?"||input=="pritam?"||input=="pritam chakraborty"){
        return "Pritam Chakraborty (chakravarty) better known as Pritam is a music director and composer from India who is currently based in Mumbai.Pritam was born in Kolkata into a Bengali family. His most top rated musics are from the movies Dhoom, Dhoom2, Gangster, Life in a metro, Jab we met, Race, Billu, Love Aaj Kal, Golmaal Returns, Tum Mile, Ajab Prem Ki Gazab Kahani, De Dana Dan, Toh Baat Pakki, Atithi Tum Kab Jaoge?, Badmaash Company and more."
    }
    else if(input=="who is sayeed quadri?"||input=="sayeed quadri?"){
        return "Sayeed Quadri is an Indian lyricist and poet who works in Bollywood. He was born in Jodhpur, Rajasthan. He won the Best Lyricist award at the 6th IIFA Awards for Murder, and Standout Performance by Lyricist at the Stardust Awards 2005 for Murder."
    }


    else if(input=="who is gajendra verma?"||input=="gajendra verma?"){
        return "Gajendra Verma is a famous Indian composer, singer, lyricist, music director and sound recordist commonly known for his super hit song “Teri Ghata”. He came into limelight with another song “Tune Mere Jana”. This song was associated with a sympathetic fake story of dying IT student whose lover died because of cancer. Well what else can i say 'tera ghat' best one... :>"
    }
    else if(input=="who is aseem ahmed abbasee?"||input=="aseem ahmed abbasee?"){
        return "Mann Mera is written by Aseem Ahmed Abbasee. Bollywood lyricist & Urdu poet Aseem ahmed abbasee ."
    }
    else if(input=="who is rahul singh?"||input=="rahul singh?"){
        return "Mann Mera Song Sung By Popular Singer Rahul Pandey."
    }


    else if(input=="who is vivek hariharn?"||input=="vivek hariharn?"){
        return "Vivek Hariharan is known for Uri: The Surgical Strike (2019), Anek (2022) and Veere Di Wedding (2018).Vivek Hariharan is a well-known Indian artist/band. Total Music Videos-8, Music Labels-Zee Music Company and T-Series, Popular Songs - Challa, Challa(Main Lad Jaana),Mor Mor,Dum Dum."
    }
    else if(input=="who is sandman?"||input=="sandman?"){
        return "Sandman composed the song Naznina from the webseries Fittrat."
    }
    else if(input=="who is altamash faridi?"||input=="altamash faridi?"){
        return " Altamash Faridi Is an Indian Playback singer who work in Indian Bollywood film Industries. He sung too many song in Bollywood movies."
    }
    else if(input=="who is jonita gandhi?"||input=="jonita gandhi?"){
        return "Jonita Gandhi is an Indian born Indo-Canadian singer. She is an adaptable virtuoso who sings in a variety of languages including English, French, Tamil, Telugu, Bengali, Hindi, Punjabi, Gujarati, Kannada and Malayalam. "
    }
    else if(input=="who is mehmood arafat?"||input=="mehmood arafat?"){
        return "Mehmood Arafat is the lyricist of the song Naznina from the web series Fittrat."
    }

    else if(input=="who is monty sharma?"||input=="monty sharma?"){
        return "Monty Sharma (born 17 April 1970) is a music composer from India scoring music for Bollywood. He is popular for being the background music composer for Black (2005), Ram-Leela (2013) and music director for Saawariya (2007). He is cousin of composer Mithoon & nephew of famous music composer Pyarelal Sharma of popular Indian music composer duo Laxmikant-Pyarelal."
    }
    else if(input=="who is shaan?"||input=="shaan?"){
        return "Shantanu Mukherjee (born 30 September 1972), popularly known as Shaan, is an Indian playback singer, composer, actor and television host. He has recorded numerous songs for films and albums in various Indian languages. Shaan hosted the shows Sa Re Ga Ma Pa, Sa Re Ga Ma Pa L'il Champs, Star Voice of India and STAR Voice of India 2.haan's song 'Chand Sifarish' (from the movie Fanaa) and 'Jab Se Tere Naina' (from Saawariya) won the Filmfare Best Male Playback Award and the Zee Cine Award Best Playback Singer - Male, in addition to receiving several other nominations. In 2002, he won the MTV Asia Music Award for best solo album for his album Tanha Dil."
    }
    else if(input=="who is sameer?"||input=="sameer?"){
        return "Shitala Pandey, better known as Sameer Anjaan, is an Indian lyricist, writing songs such as 'Mujhe Raat Din Bas', predominantly in Hindi language films. He is a Guinness World Record holder for writing the most songs. He was awarded this honor on 17 February 2016."
    }


    else if(input=="who is atif aslam?"||input=="atif aslam?"){
        return "Atif Aslam ( born 12 March 1983) is a Pakistani playback singer, songwriter, composer, and actor. He has recorded many songs in both Pakistan and India, and is known for his vocal belting, technique. Aslam predominantly sings in Urdu, but has also sung in Hindi, Punjabi, Bengali, and Pashto."
    }
    else if(input=="who is alisha chinai?"||input=="alisha chinai?"){
        return "Alisha Chinai is a pseudonym of Sujata Chinai (b. 18 Mar 1972), an Indian singer and film actress. She is one of the pioneers of pop music in India. She has also been professionally known as: Alisha Chinoy and Alisha Chinoi."
    }
    else if(input=="who is ashish pandit?"||input=="ashish pandit?"){
        return "Ashish pandit is the lyrics writer in the song tere hone laga hoon from movie 'Ajab Prem ki Gajab kahani'."
    }

 
    //About songs.
    if(input=="mean?"){
        return "Mean means phrase restating the preceding phrase in a different way or it means that you are rude to someone. “Mean” is about a high school bully, a friend or family member, or some other close associate of Taylor’s, or Kanye West who famously interrupted her MTV Awards speech."
    }
    else if(input=="answer?"){
        return "Answer means giving yourself a satisfactory result. Love Yourself: Answer , The album was designed as the finale of the Love Yourself series, which connected the story plot of short film Love Yourself 起 Wonder, Love Yourself 承 'Her', and studio album Love Yourself 轉 'Tear',forming the '起承轉結 (기승전결) (Kishōtenketsu)'storytelling composition."       
    }
    else if(input=="hurts so good?"){
        return "'Hurts so good' decribes a broken relationship between two lovers who keep running back to each other, knowing they'll get hurt again."
    }
    else if(input=="pal pal dil ke paas?"||input=="pal pal dil ke paas?"){
        return "Every moment, close to the heart.Singer Arijit Singh says, “Pal Pal Dil Ke Paas is a beautiful song that will resonate with each person who has ever fallen in love.” Director Sunny Deol says,'Pal PalDil Ke Paas' showcases the innocence of young love while Arijit Singh and Parampara's voice is the soul of the song."
    }
    else if(input=="you are my star?"){
        return "You will shine one day. your time will come. I hope for you to be your dream the story of song came across a person who is supporting those dreamy eyes who wanted to shine brightly. "
    }
    else if(input=="dil ibadat?"){
        return " Ibadat means worship as well as prayer . So Dil ibadat kar raha hai means my heart is praying.It is from Tum Mile Movie."
    }
    else if(input=="mann mera?"){
        return "Song is from the movie Table No.21 which tells story about how ragging effects someone's life completely (fact-destroy the lifes).Song revolves around the girl and boy how much they love each other."
    }
    else if(input=="naznina?"){
        return "The word means be in want of something, languishing for something you really cherish. "
    }
    else if(input=="jab se tere naina?"){
        return "When i met your eyes i felt crazilty lost in those."
    }
    else if(input=="tera hone laga hoon?"){
        return "I started to become yours."
    }


    //Date of release of songs.
    if(input=="date of release for mean song?"||input=="when was mean song release?"||input=="release of mean song?"||input=="about mean song release?"){
        return "'Mean' song is written and recorded by American singer-songwriter Taylor Swift for her third studio album, Speak Now (2010). It was released to US country radio as the album's third single on March 13, 2011, by Big Machine Records."
    }
    else if(input=="date of release of answer song?"||input=="when was answer song released?"||input=="release of answer song?"||input=="about answer song release?"){
        return "Love Yourself: Answer (stylized as LOVE YOURSELF 結 'Answer') is the third Korean-language compilation album by South Korean boy band BTS. The album was released on August 24, 2018, by Big Hit Entertainment and is available in four different versions: S, E, L, and F. The album contains twenty-five tracks (twenty-six for digital version), including seven new songs, with the track 'Idol' serving as the lead single. Most tracks are from Love Yourself: Her, and Love Yourself: Tear, including some remixes. The album debuted at number one in South Korea, Canada, Japan and the United States, becoming BTS' second chart-topping album in the US market.On November 7, 2019, Love Yourself: Answer became the first Korean album to spend one year on the Billboard 200 chart. Two days later, it became the first Korean album to receive gold certification in the United States."
    }
    else if(input=="date of release of hurts so good song?"||input=="when was hurts so good song release?"||input=="release of hurts so good song?"||input=="about hurts so good song release?"){
        return "'Hurts So Good' is a English song by Norwegian singer Astrid S, released as the second single from her self-titled debut EP. The song was written by Lindy Robbins, Julia Michaels, Tom Meredith, and Marco Borrero. It was released on 6 May 2016.";
    }
    else if(input=="date of release of pal pal dil ke paas song?"||input=="when was pal pal dil ke paas song release?"||input=="release of pal pal dil ke paas song?"||input=="about pal pal dil ke paas song release?"||input=="pal pal dil ke paas song?"||input=="pal pal dil ke paas?"){
        return "Pal pal dil ke paas was premiered on youtube 27 Aug 2019. Song by Arijit Singh,Parampara Thakur."
    }
    else if(input=="date of release of you are my star song?"||input=="when was you are my star song release?"||input=="release of you are my star song?"||input=="about you are my star song release?"){
        return "You Are My Star song from the album IDOL: The Coup (Original Television Soundtrack) is released on Dec 2021. The duration of song is 04:14. This song is sung by WooSung."
    }
    else if(input=="date of release of dil ibadat song?"||input=="when was dil ibadat song release?"||input=="release of dil ibadat song"||input=="about dil ibadat song release?"){
        return "Dil Ibaadat song is sung by Pritam and KK. Dil Ibaadat, from the album Tum Mile (Original Motion Picture Soundtrack), was released in the year 2009. The duration of the song is 5:29. "
    }
    else if(input=="date of release of mann mera song?"||input=="when was mann mera song release?"||input=="release of mann mera song"||input=="about mann mera song release?"){
        return "Mann Mera song is sung by Gajendra Verma. Mann Mera, from the album Table No. 21, was released in the year 2012. The duration of the song is 3:20.Table No. 21 is a 2013 Indian thriller film directed by Aditya Datt and produced by Eros International."
    }
    else if(input=="date of release of naznina song?"||input=="when was naznaina song release?"||input=="release of naznaina song"||input=="about naznaina song release?"){
        return "Naznina song of Vivek Hariharan, Anusha Mani, Composer-Sandman.It is of duration 03:49 min from Firtart story on ZEE5.Released on YouTube three years ago around 2020."
    }
    else if(input=="date of release of jab se tere naina song?"||input=="when was jab se tere naina song release?"||input=="release of jab se tere naina song"||input=="about jab se tere naina song release?"){
        return "Jab Se Tere Naina song is sung by Monty Sharma and Shaan. Jab Se Tere Naina, from the album Saawariya (Original Motion Picture Soundtrack), was released in the year 2007. The duration of the song is 4:43."
    }
    else if(input=="date of release of tera hona laga hoon song?"||input=="when was tera hona laga hoon song release?"||input=="release of tera hona laga hoon song"||input=="about tera hona laga hoon song release?"){
        return "Tera Hone Laga Hoon is sung by Atif Aslam, from the album Tera Hone Laga Hoon, was released in the year 2021. The duration of the song is 4:26. "
    }
    else{
        return "Maybe a keyword error try writing in lowercase letter with question mark at end...:) Or maybe it's not in the response of bot."
    }
 
}