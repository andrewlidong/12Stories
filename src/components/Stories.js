import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Modal,
  IconButton,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BookIcon from '@mui/icons-material/Book';
import { keyframes } from '@mui/system';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const sparkle = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pageFlip = keyframes`
  0% {
    transform: translate(-50%, -50%) perspective(1000px) rotateY(0deg);
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.2);
  }
  100% {
    transform: translate(-50%, -50%) perspective(1000px) rotateY(-180deg);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;

const openBook = keyframes`
  0% { 
    transform: translate(-50%, -50%) perspective(1000px) rotateY(90deg);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) perspective(1000px) rotateY(-20deg);
    opacity: 0.8;
  }
  100% { 
    transform: translate(-50%, -50%) perspective(1000px) rotateY(0deg);
    opacity: 1;
  }
`;

const storyFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const letterSpacing = keyframes`
  0% { letter-spacing: normal; }
  50% { letter-spacing: 2px; }
  100% { letter-spacing: normal; }
`;

// Replace these with your actual stories
const stories = [
  { 
    title: "The Elf at the Window",
    subtitle: "Story One",
    content: `*On a crisp Christmas Eve, the snow blanketed the town,
The streets had grown quiet, the lights had dimmed down.
In a cozy apartment adorned with delight,
Andrew and Kelly prepared for the night.*

"Can you believe it's been nearly a year," **Andrew** said with a grin,
his voice full of cheer.
"From the Penrose we met, and oh, what a start,
It's a memory etched right here in my heart."

**Kelly** looked up from her Instagram scroll,
Her smile as warm as a hot cocoa bowl.
"Who knew a FaceTime with Mom on my way,
Would lead to your nose being bitten each day?"

**Andrew** laughed, a sound hearty and bright,
"You sure have a knack for keeping things light."
They sipped on their cocoa, their hearts full of glee,
Recalling their trip to Paris and that sweet baguette spree.

"All those layers you wore, like a puffy-clothes queen,"
**Andrew** teased, his eyes twinkling with sheen.
"But it worked, didn't it?" **Kelly** replied,
"I'll always outsmart a weight limit!"

But as the clock struck midnight, they heard a loud rap,
At the frosty-paned window came a small tapping tap.
They peered through the glass, and what did appear?
A shivering elf with a hat on his ear.

"Let me in, I implore you, the wind's in a roar!
My name's *Pip*, and I need your help, I'm sure."
Bemused but intrigued, **Andrew** opened the way,
And *Pip* tumbled in, brushing snowflakes away.

"Santa's in trouble, he's overwhelmed with the load,
So he's asked me to find couples with a generous code.
You two fit the bill, your spirits so bright,
Will you help spread the joy on this magical night?"

With a snap of his fingers, their room came alive,
With glittering costumes and sleighs to arrive.
Red and green outfits with jingles that rang,
And a sleigh pulled by reindeer that practically sang.

"This is bonkers!" said **Andrew**, climbing aboard,
While **Kelly** chimed in, "Let's spread joy galore!"
Clinging to his arm as she always would do,
**Kelly** whispered, "We'll make this night something new."

Through the skies they did soar, the stars guiding their flight,
As *Pip* handed them lists on this magical night.
"In Brooklyn, a boy dreams of tracks and trains,
leave this locomotive to spark his brain."

"And in Harlem, a girl who dreams of ballet,
Needs this music box to help light her way."
Each stop was a story, each gift held a gleam,
Fulfilling the hopes of a child's Christmas dream.

When they reached Queens, **Kelly** gasped at the sight,
A girl with a hippo clutched tight through the night.
"It's *Moo Deng*!" **Kelly** whispered, her heart feeling warm,
"This plush Santa hippo will keep her from harm."

**Andrew** chuckled, "You always add flair,
Every gift you give shows how much you care."
Through the night they delivered, spreading good cheer,
With laughter and love as their reindeer steered.

"Ho ho!" cried *Pip* as they neared their last tree,
A sparkling park where joy danced wild and free.
They handed out gifts, their hearts swelling with pride,
As the magic of Christmas was shared far and wide.

When the last box was placed, *Pip* clapped with delight,
"You two are amazing, you've brightened the night."
With a snap and a shimmer, the sleigh whisked away,
And they found themselves home at the break of new day.

Back in their apartment, the magic still fresh,
**Kelly** snuggled to **Andrew**, their hearts did enmesh.
"That was the best Christmas, no question, no fight."
**Andrew** kissed her and said, "To more magic each night."

*And as Christmas morn peeked through the pane,
They dreamed of adventures and laughter again.
For Andrew and Kelly, the night had shown clear,
That love, like the season, grows brighter each year.*`
  },
  { 
    title: "Queen of Hearts",
    subtitle: "Story Two",
    content: `It started at sunrise, the air crisp and bright,
At Moo Deng’s Khao Kheow, the mood was just right.
With Kelly and Andrew, the zookeeper pair,
And Moo Deng the hippo, no one could compare.

“Oh, what shall we do on this fine, sunny day?”
Moo Deng wiggled her ears in a hippo-ish way.
“Let’s have us some fun, a true hippo spree,
And spread cheer through the zoo for all folks to see!”

Moo Deng put on a big floppy hat,
Kelly tied on her scarf (it was knitted and flat).
Andrew hung ribbons and bells on her tail,
“She’s ready for fun!” they declared without fail.

Through the zoo paths they marched, a sight to behold,
Moo Deng stomped and twirled, so brave and so bold.
“Good morning, dear lions!” she said with a bow,
“You’re regal and fierce, but please don’t growl now!”

The flamingos all laughed as they struck a quick pose,
While Moo Deng waltzed by on her tippy hippo toes.
The monkeys swung down and joined in her fun,
“Hippo, you’re brilliant! Oh, second to none!”

Children arrived with wide-open eyes,
As Moo Deng the hippo grew larger in size (or so it appeared, her spirit so bright).
“Let’s follow her lead!” they cheered with delight.

She juggled some coconuts, a feat quite absurd,
And danced with a parrot who chirped every word.

But the day wasn’t done; Moo Deng had a plan,
She’d visit the elephants, her biggest fan clan.
“Dear pachyderm pals, come march along too!”
And soon the parade was a marvelous crew.

By sunset, the zoo was a festival of cheer,
And Moo Deng declared, “Let’s do this each year!”
Kelly and Andrew, their hearts full of glee,
Hugged Moo Deng and said, “You’re the queen of this spree!”

As the stars started twinkling, the zoo grew quite still,
But Moo Deng dreamed on, her heart full of thrill.
For a hippo who leads with such grace and delight,
Turns every day into a magical sight.`
  },
  { 
    title: "Birthday Gossip",
    subtitle: "Story Three",
    content: `Birthdays might come every year, but Andrew’s night? A celebration that has the city buzzing. Spotted: Andrew and Kelly, NYC’s favorite couple, navigating a night of indulgence, melodies, and near-miss club drama. Curious? Let Gossip JoJo spill the tea. You know you love me. XOXO, Gossip JoJo.

The night began with a feast fit for a king (or a birthday boy) at Villa Berulia. Andrew, rocking a sharp blue polo, kept it classic with a chicken parmigiana that practically sang on the plate. But the real serenade came courtesy of the waiters, who belted out a cheerful “Happy Birthday” as Andrew blushed and Kelly snapped pictures. Dessert? None other than a perfectly crafted tiramisu, rich enough to match the glow of candlelight and birthday cheer.

With dinner devoured and the mood set, the duo headed to The Parlour Room, a piano bar with an air of effortless elegance. Kelly, in a red dress that could have stolen the show at Fashion Week, sipped on cocktails while Andrew soaked in the sultry tunes. Across the street? The electric hum of Den Social, the Asian nightclub calling to the late-night crowd.

But the plot thickened when Kelly ran into her old club crew, queued up outside Den Social. Hugs, squeals, and whispers flew fast. Were they catching up on old times or throwing shade about Kelly’s glamorous pivot from nightlife to a cozy piano bar birthday? Whatever the vibe, it left an impression as the couple debated a last-minute pivot to the nightclub scene.

Ultimately, Andrew and Kelly stuck with their original plan, opting to keep the night sophisticated and sweet. They strolled away from Den Social, hand in hand, proving once again they’re the couple that sets the tone, not follows it.

And so the night ended, with Andrew’s birthday glowing like the city lights—elegant, intimate, and just a touch of intrigue. Until next time, my little socialites.
You know you love me.

XOXO, Gossip JoJo.
` 
  },
  { 
    title: "A Very Wizarding Halloween",
    subtitle: "Story Four",
    content: `The air was crisp, and the streets of Jersey City bustled with the magic of Muggle Halloween—children in costumes, jack-o’-lanterns glowing on stoops, and the faint cackle of witches (albeit recorded). But for Kelly, the evening’s adventure felt like something straight out of the wizarding world.

After a long day at work, Kelly struggled to navigate the throngs of parade-goers blocking every route into the city. The Floo Network? Too risky. Apparition? Off-limits for Muggle areas. Ultimately, she flagged down a magical carriage (or, as Muggles called it, a car) and set her sights on Brittany’s home, the busiest trick-or-treating spot in town.

Andrew, already waiting at Brittany’s, greeted her with a grin as she swept in, cloaked in her costume as Moo Deng, her favorite hippo. Andrew’s outfit as her zookeeper completed the look, drawing delighted laughs from Brittany’s friends. The house smelled of charcuterie and Hawaiian pizza, and the table shimmered under flickering jack-o’-lantern lights—enchanted, perhaps, to feel just a bit spookier.

"Grab a slice before it vanishes," Andrew said, handing her a plate. Brittany’s friends, an eclectic group of wizards and Muggles alike, regaled them with tales of past Halloweens. Between bites of pizza, Kelly admired the festive decor, secretly wondering if Brittany’s string decorations were bewitched.

The evening’s excitement grew as someone suggested a game of poker. Kelly, ever the Gryffindor, dove into the game with gusto, betting recklessly on hands she barely understood. Andrew, on the other hand, played like a Slytherin, quietly collecting chips until he emerged victorious.

"Beginner’s luck," Kelly muttered, laughing as Andrew teased her over his winnings.
As the clock neared midnight, they decided it was time to return to the city. They bundled up and headed to the train, the night air cool and brimming with the electric energy of Halloween. The train ride was filled with laughter, the kind of easy camaraderie that made the evening feel magical despite its Muggle setting.

As they approached the city, Kelly leaned against Andrew, her hippo costume slightly askew, and murmured, "Next year, I’m challenging you to a game I know I can win."

Andrew chuckled, holding her close. "Deal. But only if I get to pick the pizza toppings."

And so, their Halloween ended not with grand spells or enchanted forests, but with the quiet magic of good company, shared laughter, and the promise of more adventures to come.
Until next Halloween, mischief managed.
`
  },
  { 
    title: "The Knocking",
    subtitle: "Story Five",
    content: `The air was thick with dread as Andrew sat in his dimly lit apartment on the Upper East Side. The room, once warm with the hum of laughter and shared intimacies, now seemed hollow, its silence broken only by the faint ticking of a clock. On the flickering screen before him, Kelly’s face hovered like a ghost, her expression tight with unspoken grief.
    
They had Facetimed countless times before, but tonight, something hung heavy between them, an unseen specter conjured by weeks of distance. Andrew’s recent trip to Breckenridge had left a rift—a chasm born of miscommunication and doubts unspoken. Words, once soft and sure, now carried the edge of a blade.

“I don’t know if this is working anymore,” Kelly murmured, her voice trembling, a melody of despair.

Andrew’s heart, already burdened, sank further into the abyss. “We can’t end like this,” he replied, his voice raw. “Not over a screen. Not like this.”

Her silence was a dagger, twisting slowly, the pause punctuated only by the faint hum of city life beyond his window. Desperation clawed at Andrew’s chest, and before reason could intervene, he was on his feet, the phone still clutched in his hand.

“I’m coming over,” he said with sudden resolve.

“Andrew, no—” Kelly began, but her protest was drowned by the sharp snap of his apartment door slamming shut.

The taxi ride was a blur, the world outside the window a smear of rain-slicked streets and neon haze. On the phone, Kelly’s protests continued, her voice a mixture of caution and disbelief. Yet Andrew spoke little, his focus fixed on the singular thought that this night, this moment, could not be left to fate.

The cab came to a halt outside Kelly’s Midtown East apartment, the building looming above him like a silent sentinel. He climbed the steps with heavy feet, the cold night air biting at his resolve. Standing before her door, he hesitated, his fist hovering inches from the wood.

He knocked. Once. Twice. Thrice.

The sound echoed down the hallway, each rap a reverberation of his pounding heart. The moments stretched, heavy as lead, before a soft rustle came from within.
The door creaked open, just a sliver, revealing Kelly’s cautious face. Her eyes, wide and wary, searched his for answers.

“Andrew,” she whispered, as though uncertain if the man before her was real or a specter conjured by her doubts.

“I couldn’t let this be the end,” he said simply, his voice steady but low, as though any louder might shatter the fragile stillness between them.
Kelly hesitated, the door a barrier both literal and symbolic. Then, slowly, she opened it wider, stepping aside to let him in.

Inside, the warmth of her apartment contrasted sharply with the cold outside. For a moment, they stood in silence, two souls caught in the delicate balance between hope and despair.

“I don’t want to lose you,” Andrew said at last, his voice breaking.

Kelly looked at him, her expression softening as tears welled in her eyes. “I don’t want to lose you either,” she whispered, her voice barely audible.

And so, in that dimly lit room, beneath the watchful gaze of the city’s towering spires, they chose each other. The fractures in their bond began to heal, the weight of doubt replaced by the fragile promise of a new beginning.

The knocking had ceased, the echoes fading into the quiet certainty of love reclaimed.
`
  },
  { 
    title: "The Reef of Shadows",
    subtitle: "Story Six",
    content: `The waters of Cozumel shimmered like liquid sapphire, concealing beneath their surface a labyrinth of coral, caves, and creatures of the deep. Andrew and Kelly, weary from their journey and still recovering from a bout of cruel food poisoning, floated near their dive boat, their gear hissing faintly as it adjusted to the waves.

Their guide, the spirited and slightly clumsy French instructor, Cami, adjusted her fins. “Ready to explore the underworld?” she asked, her accent lilting. Beside her, a cheerful Canadian adjusted his underwater camera, preparing to capture the wonders below.
With a splash, they descended into the blue, the world above fading into a serene, aquatic silence. The coral stretched out like an underwater cathedral, its spires teeming with life. But serenity soon gave way to commotion.

“Zut alors!” Cami’s muffled exclamation carried through the water as she accidentally kicked a coral head, sending a plume of sand and startled fish into the current. Andrew and Kelly exchanged a glance, their expressions hidden behind their masks but their shared amusement unmistakable.

Their journey continued, the group weaving through coral arches and caverns, their movements careful and reverent. A manta ray glided overhead, its graceful wings casting long shadows on the seabed. Cami pointed excitedly, her gestures animated even underwater.

As they swam deeper, Andrew spotted a familiar shell—Charlie, the resident turtle of the reef, paddling serenely past. The group paused, captivated, as Charlie performed his leisurely circuit.

But it was near the coral shelf that Andrew encountered the apex of the dive. Tucked beneath an overhang, a nurse shark lay in tranquil repose, its gills moving slowly. Against better judgment, Andrew reached out, brushing his hand along its smooth skin. It stirred briefly, its eyes blinking lazily before settling back into slumber.

Not all was tranquil beneath the waves, however. In a moment of confusion, Andrew turned and realized Kelly was no longer in sight. A spike of panic seized him as he scanned the murky water, his breaths coming faster through the regulator.

Ettienne Van Der Westhuizen, one of the veteran divers in the group, tapped Andrew’s arm, gesturing with a stern look. “Always look after her,” his hand signals seemed to say. Andrew nodded, his concern mounting as he pushed forward through the reef.
Then, relief: Kelly emerged from behind a coral ridge, her hand raised in apology.  Andrew exhaled, his tension melting as he swam to her side, taking her hand in his.
The Canadian, ever the opportunist, snapped a photo of the couple, their hands clasped against the backdrop of the vibrant reef. Later, he’d show them the image, a moment of connection immortalized in the depths.

As the dive ended, the group ascended, their bodies light and minds brimming with awe. Back on the boat, laughter mingled with the rhythmic slap of waves against the hull.
“Let’s not make a habit of disappearing,” Andrew teased as they removed their gear.
Kelly smirked. “Then stop touching sharks.”

As the boat headed back to shore, the weariness of their food poisoning seemed a distant memory, replaced by the thrill of their shared adventure. The manta, the turtle, the shark, and even Cami’s errant fin all became part of the story they’d tell for years to come—a tale of the Reef of Shadows and the bond that grew stronger beneath its waves.
And so, though the waters were stilled and the day waned, their spirits soared, carried by the currents of a journey shared.
` 
  },
  { 
    title: "A Night at the Met",
    subtitle: "Story Seven",
    content: `The Metropolitan Opera House stood like a temple to grandeur, its arched windows aglow against the night. The vast expanse of Lincoln Center, with its glittering fountain at the heart, seemed to hum with the promise of the extraordinary. For Kelly, it was all new—this world of operatic splendor that Andrew had brought her into.

Inside, they ascended the grand staircase, her hand brushing the banister as though to steady herself in the face of such opulence. Andrew, ever composed in his dark jacket, guided her through the gilded corridors. Her dress—a warm orange—caught the light, giving her the appearance of something rare and luminous, a fire shining in a sea of black tie.

They made their way to the orchestra during the performance, where Kelly gazed in wonder at the instruments poised for the evening's symphony. The violins gleamed like polished mahogany under the stage lights, and the timpani stood like dormant sentinels, waiting to roar. Andrew explained the layout of the orchestra with the ease of someone used to such surroundings, but Kelly was barely listening. Her attention was drawn, not to the instruments, but to him.

As he spoke, she studied his profile, the sharpness of his jaw softened by the dim light, the way his hand moved in subtle gestures. She wanted, in that moment, to lean in—to close the small gap between them. Instead, she allowed her leg to graze his under the cover of the plush theater seats, a subtle signal, an unspoken invitation. But Andrew, distracted by the performance, didn’t notice.

The lights dimmed, and the strains of Nabucco filled the air. The voices, grand and mournful, rose like a cathedral around them. Kelly found herself swept up in the story, its drama mirroring her own quiet longing. Her gaze shifted to Andrew periodically, hoping he might turn to her, might understand the moment she wanted to create. But he was transfixed by the stage, his focus unwavering.

The final act brought the audience to its feet, applause thunderous and unrelenting. As they filed out of the theater, Kelly trailed just behind Andrew, the din of chatter filling the vast lobby. Outside, the fountain shimmered in the night, its waters dancing in the glow of Lincoln Center’s lights.

She glanced at him as they stood by the edge of the fountain, the cold air brushing against her skin. This, she thought, would have been the perfect moment. The drama of the opera still clung to them, the city seemed alive with possibility, and the fountain’s rhythm seemed to murmur an invitation. She imagined his hand on her cheek, imagined leaning into him, their first kiss unfolding like the swell of a symphony.
But Andrew, oblivious to her thoughts, spoke of the performance, his tone bright with enthusiasm. Kelly nodded, smiling faintly, but inside, she felt a quiet disappointment. The moment had passed, slipping away like the notes of a fading aria.

As they turned to leave, she cast one last glance at the fountain, its beauty both a comfort and a reminder of what could have been. Their first opera had been unforgettable, but for Kelly, it would remain tinged with a bittersweet longing, the kind that lingered like a minor chord in the heart.

Andrew took her hand as they walked toward the subway, unaware of her unspoken wish. The night, grand as it was, would settle into their memories differently—his marked by the brilliance of Nabucco, hers by the ache of an almost-kiss beneath the shimmering fountain at Lincoln Center.`
  },
  { 
    title: "The Girl and The Pig",
    subtitle: "Story Eight",
    content: `Kelly’s birthday began in the electric glow of Barcade, the East Village arcade buzzing with laughter and the steady hum of retro game machines. She was locked in a battle with her friends over the controls of a glowing star shooter game. The joystick moved with precision under her grip as her virtual ship dodged incoming meteors and enemy fire.

Her friends cheered as her score climbed higher, her deft movements proving she had a natural knack for the game. When the inevitable “Game Over” screen flashed, Kelly turned, triumphant, her smile wide as her friends groaned in mock defeat.
The celebration continued until it was time for the next chapter of her night—dinner with Andrew at Via Della Pace. She arrived to find him waiting at a cozy table near the window, the soft candlelight casting a warm glow over the restaurant.

“How was Barcade?” Andrew asked as she slid into her seat, his easy smile already making her feel at home.

“I’m amazing at star shooters,” Kelly declared with mock bravado, tossing her scarf onto the back of her chair. “I think my friends are plotting revenge.”

Andrew raised an eyebrow. “Is that so? We’ll see how you fare when you’re up against me.”
Their dinner was effortless, a perfect balance of wine, fresh pasta, and playful conversation. As dessert arrived, Andrew pulled a small box from beside his chair, tied neatly with a ribbon.

“Happy birthday,” he said, sliding it across the table.

Kelly opened it carefully, her curiosity blooming into delight. Inside was a collection of treasures: a drawing of a girl holding a pig in a sunlit field, two stuffed pigs—one small and charming, the other large and plush—and an Ateez sweater covered with cartoon animals.

“You drew this?” Kelly asked, lifting the sketch with careful hands.
Andrew nodded, his voice steady. “I did. The girl and the pig… it reminded me of you. It felt right.”

Kelly’s heart softened, her fingers tracing the delicate lines of the drawing. “It’s perfect,” she said, her voice soft. She reached into the box and pulled out the smaller pig, its floppy ears endearing in their simplicity. “And these?”

“I thought you could use some company,” Andrew said with a grin. “The sweater is just a bonus.”

After dinner, the two returned to Barcade together. Kelly led Andrew back to the star shooter game she’d dominated earlier, eager to show off her skills.

“Think you can beat me?” she teased, motioning to the controls.

Andrew smirked. “Let’s find out.”

They played side by side, navigating the asteroid fields and firing at oncoming enemies. Kelly started strong, her confidence bolstered by her earlier victories. But Andrew was steady and precise, outmaneuvering her ship and racking up points with every move.
“How are you so good at this?” Kelly laughed, leaning over to watch his hands on the joystick as the machine announced his high score.

“I told you I was a star shooter guy,” he said with a playful grin.
Kelly couldn’t stop laughing as her own turn ended in spectacular failure, her ship crashing in a blaze of neon. “Okay, you win,” she said, holding up her hands in mock surrender.

As the arcade quieted and they decided to call it a night, Kelly found herself holding the smaller stuffed pig Andrew had given her, carrying it like a token of the night. Back at her apartment, she placed the pigs side by side on her bed, the larger one standing guard over the smaller. The drawing found a home on her desk, where she could see it every morning, a reminder of Andrew’s thoughtfulness.

Pulling on the Ateez sweater, Kelly smiled to herself. The night had been perfect, filled with laughter, surprises, and the quiet warmth that only Andrew could bring. As she lay back in bed, the smaller pig hugged to her chest, she thought of the star shooter game, the drawing, and the way Andrew’s care shone through in the details.
Her birthday had been everything she could have hoped for and more, a memory that would stay with her long after the neon lights of Barcade had faded.
`
  },
  { 
    title: "Fikus",
    subtitle: "Story Nine",
    content: `In the shadow of Bethel Woods, where the winds of music carried whispers of ancient lore, Andrew and Kelly embarked on their pilgrimage to witness the songs of Phish—a rare chance to hear the fabled Fikus, a tune said to be lost to the ages. Alongside them was Nick, a loyal companion with a skeptical ear, eager to join the quest but uncertain of the treasures they’d find.

The journey began with a carriage ride (some might call it a car), the wheels turning steadily toward the sacred venue. As the road stretched ahead, Andrew introduced the group to the curious sounds of The Brat Album, a collection of tunes both chaotic and whimsical. Nick, ever practical, furrowed his brow and remarked, “This is… unconventional,” though the music played on undeterred.

To balance the journey’s chaos, they tuned into the voices of Casper and Peixian, wise scholars who spoke of Google’s Bigtable in the sacred whitepaper discussions of SWETea. Their words, like notes on a page, wove a tapestry of insight, grounding the group in the rhythm of intellectual pursuit.

Their first stop was the enchanted grounds of Storm King, where great sculptures rose like sentinels against the sky. They took the shuttle, a magical chariot, to explore the vast landscape. The art seemed to hum with its own melodies, each piece whispering secrets to those who cared to listen. Kelly gazed in awe, her steps light as if the air itself buoyed her.

Next, they traveled to the village of Woodstock, a place where music’s spirit lingered in every corner. At a humble pizza shop, they shared a pie of duck, its flavors rich and unexpected. The owner, a kindred spirit, spoke of the night before, when they too had been swept up in Phish’s sonic waves.

Finally, they reached Bethel Woods, the hallowed ground where music history lived. Here they met Stuart Salenger, whose box would shelter them during the show. Stuart, tall and imposing, regaled them with tales of his beginnings, his fascination with frogs at Coney Island’s Nathan’s driving him to a life of exotic pursuits. His wife, Pam, equally statuesque, nodded in agreement, her presence adding to the mythic air of their hosts.
As the sun dipped below the horizon, the music began. The first set unfolded with surprises, none greater than the long-lost Fikus. Andrew and Nick, whose lifetimes had never known the song performed live, exchanged wide-eyed glances, the air electric with rarity. Kelly, new to this world, felt the energy ripple through her, an initiation into the magic of the moment.

The second set erupted in wild crescendos, the band conjuring a storm of sound that seemed to dance with the spirits of Woodstock’s past. When Character Zero closed the night, the crowd roared, their voices joining in an anthem of unity and release.
As the final note faded into the cool night air, the trio made their way back to their carriage, their hearts full and their minds alight with the echoes of the show. The journey home was quieter, Nick nodding off in the back as Kelly and Andrew exchanged knowing smiles.

By the time they dropped Nick off, the stars above seemed to hum with the memory of Fikus, a song once forgotten but now alive in their shared experience. For Kelly, her first Phish show was more than a concert—it was an initiation into a world where music, history, and camaraderie wove a tapestry as rich as the night itself.
And so, under the watchful eye of Bethel Woods, they turned homeward, the groove of the evening etched into their hearts, the rare and precious Fikus a tale they’d carry forward.`
  },
  { 
    title: "The Pirate's Star",
    subtitle: "Story Ten",
    content: `The clouds gathered thick and heavy over the port city of Flushing, their gray tendrils whispering of storms to come. Andrew arrived at Paris Baguette, the bustling hub where Kelly stood at the heart of the crowd. She was no ordinary sailor this day—her presence commanded attention as she hosted a fan gathering, her eyes sparkling like treasure beneath the café's warm lights.

On the table before her lay a tray of Ateez-inspired donuts, each a confectionary marvel, crafted to honor the legendary pirate crew. Andrew selected one, its glaze shimmering faintly like the dew on a ship's mast at sunrise. He bit into it, savoring the unexpected burst of spice and sweetness.

“What do you think?” Kelly asked, her voice carrying over the hum of the gathering.
“Unexpected,” Andrew said with a grin. “But I like it.”

From there, they joined Kelly's trusted crewmates, Thea and Keena, for a meal in the great hall of the Flushing food court. The sailors shared tales of past voyages and planned for the evening ahead, their laughter filling the air as Andrew devoured a skewer of Taiwanese sausage, its smoky tang lingering like a memory of distant shores.
But the clouds began to weep, first in a light drizzle and then in torrents. The crew summoned a carriage to carry them to Citifield, the grand harbor where Ateez's ship, The Aurora, would dock for the night's epic spectacle. The rain lashed against the windows, an ominous drumbeat as they arrived at the venue.

The storm was unrelenting, forcing the evening's start to delay. But the faithful—those who knew the power of the Pirate Kings—waited with unwavering resolve. At last, as the winds calmed and the rain subsided, the time came.

The stage erupted in light, a beacon slicing through the mist. Ateez emerged, their forms cloaked in shadow until the music roared to life. Their flagship, The Aurora, took flight in the minds of all who watched, its glowing sails leading the charge into uncharted territories.

The concert unfolded like a journey across treacherous seas and wondrous lands. With Wonderland, the crew set the tone, their harmonies and choreography drawing the crowd into the pulse of adventure. Each member commanded their post—Hongjoong, the charismatic captain; San, the fierce warrior; Wooyoung, the playful navigator—each pouring their soul into the voyage.

Midway through the set, the skies seemed to clear with Wave, the song rolling across the audience like the gentle tide before a storm. The fans, their light sticks raised, became a sea of stars, guiding The Aurora through the night.

Then came the battle anthem, Answer, a performance so intense it felt like the clash of swords in a storm. Andrew, swept up in the ferocity of the moment, joined the shouts of the crowd, his voice rising with thousands of others to challenge the heavens themselves.
But the final assault came with the encore. Guerrilla blazed forth like a cannon shot, the stage glowing red with rebellion. The crew of Ateez delivered every ounce of their strength, their movements precise and relentless, until the last note echoed into the night.

For Andrew's first Ateez concert was not a mere spectacle. It was a legend, a chapter in a tale of courage and connection, a night when even the fiercest storm could not hold back the crew of The Aurora.
`
  },
  { 
    title: "Enchanted Dreams",
    subtitle: "Story Eleven",
    content: `The magic of Disneyland Paris sparkled in the crisp December air. Twinkling lights lined the pathways, and the scent of freshly baked gingerbread mingled with the chill of winter. Andrew and Kelly walked hand in hand down Main Street, their eyes wide with wonder as the Sleeping Beauty Castle shimmered ahead, aglow with thousands of tiny lights.

"It's like stepping into a dream," Kelly said, her voice soft with awe. 

Andrew grinned. "It's more than a dream. It's magic."

As they approached the castle, a soft melody drifted through the air—a familiar tune from a Disney classic. Kelly paused, her hand tightening on Andrew's. "Do you hear that?"
Andrew nodded. "It's coming from the Enchanted Garden. Let's check it out."

They followed the music to a small, hidden courtyard tucked behind the castle. The garden was aglow with floating lanterns, their golden light reflected in a still pond. At the center stood a marble pedestal, and atop it was a snow globe unlike any they had ever seen. Inside, a tiny, swirling snowstorm encased a perfect miniature of the Sleeping Beauty Castle.

A soft voice filled the garden, melodic and inviting. "To those who seek wonder, step forth and make your wish."

Kelly looked at Andrew, her excitement bubbling over. "Do you think it's real?"

"Only one way to find out," he said, stepping toward the pedestal.

As they placed their hands on the snow globe, the world around them seemed to shift. The garden faded away, replaced by a scene from a classic Disney fairy tale. They found themselves in the middle of a grand ballroom, its gilded walls and crystal chandeliers sparkling. Characters from across the Disney universe danced and laughed, their joy filling the air.

"We're in the middle of a ball!" Kelly exclaimed, her voice a mix of disbelief and delight.

A tall figure approached, his cape swishing dramatically. It was the Beast, but his face was lit with kindness as he extended a paw. "Welcome to the Enchanted Ball. The magic brought you here because your hearts are full of wonder."

Kelly curtsied with a laugh, while Andrew gave a small, awkward bow. "We're honored," he said.

The Beast gestured to the floor. "Dance, and let the magic guide you."

The music swelled, and Kelly and Andrew found themselves swept into a waltz. The other dancers—princes, princesses, and even a few mischievous sidekicks—twirled around them. It felt like time had slowed, each step light and effortless as if the floor itself carried them.

As the final note of the waltz faded, a glittering light enveloped them, and they were back in the garden. The snow globe on the pedestal glowed faintly, as if acknowledging their journey.

"Was that real?" Kelly asked, her cheeks flushed.

Andrew looked at her, his eyes soft. "Does it matter?"

She smiled and took his hand. "No. It was perfect."

As they walked back toward the castle, the fireworks began, bursting into brilliant colors against the night sky. They stopped to watch, the warmth of the moment wrapping around them like a blanket. And though the magic of the snow globe had brought them to a fairy tale, it was the magic they shared that made the night unforgettable.
` 
  },
  { 
    title: "A Balinese Monkey",
    subtitle: "Story Twelve",
    content: `The villa rested at the edge of Ubud's dense jungle, a place where shadows moved in rhythm with the breeze, and the air carried the faint scent of frangipani and damp earth. Andrew sat on the wide, weathered veranda, the wood cool under his feet despite the day's heat. Before him, the jungle seemed alive, its greens layered like brushstrokes on an infinite canvas.

Kelly appeared from inside, her hair still damp from a shower. She set down a plate of tropical fruit, vibrant and fragrant, then folded herself gracefully onto the seat beside him.

“You've been quiet all morning,” she said, her voice gentle, probing.
Andrew didn't answer immediately. His gaze lingered on the treetops, where sunlight played tricks among the leaves. “There's something strange about this place,” he said at last. “It's beautiful, but… it feels like it's watching us.”

Kelly laughed softly. “The jungle is always watching. It's its nature.”

“Maybe,” Andrew murmured, though his tone suggested something deeper.

The days in Bali had been slow, deliberate. Andrew had felt an undercurrent in the air, a quiet hum that unsettled him in ways he couldn't name.

It was later that day, in the monkey forest, that things began to shift.

The Sacred Monkey Forest in Ubud was both enchanting and unnerving—a sanctuary where ancient trees held stories in their roots and monkeys roamed freely, their watchful eyes too intelligent to feel entirely benign.

Andrew and Kelly strolled the paths, passing moss-covered statues and shrines. Kelly admired the playful antics of the macaques, laughing as a young one swung boldly from a low branch.

“Careful,” Andrew warned. “They're not just here for show.”

“I think they like me,” Kelly said, crouching to offer a piece of fruit to a particularly curious monkey. It snatched the fruit with surprising precision, then darted off into the trees.

Andrew was about to respond when an older monkey appeared. It wasn't large, but something about its presence demanded attention. Its fur was streaked with gray, and its eyes glinted with a depth that unsettled him.

The monkey paused before Andrew, its gaze locking onto his. Then, with deliberate slowness, it climbed onto the bench beside him and sat.

“Well, this is new,” Kelly said, watching with amusement.

Andrew couldn't look away. The monkey's stare was unbroken, its presence weighty. And then, as if deciding something, it spoke.

Not in words exactly, but in Andrew's mind, the voice soft and calm, like the rustle of leaves in the wind.

“You have a name,” the voice said. “A name that is yours, yet not yours.”

Andrew blinked, his breath catching. “What are you—”

“Do not be alarmed,” the voice continued. “You have carried a name that does not fit, and so I have taken it.”

“What does that mean?” Andrew said aloud, startling Kelly.

“What's wrong?” Kelly asked, her amusement giving way to concern.

Andrew turned to her, his voice faltering. “The monkey. It… spoke to me.”

Kelly frowned, glancing at the monkey. It sat calmly, grooming itself, as if nothing unusual had occurred.

“You need rest,” she said, reaching for his arm. “Let's head back.”
But Andrew couldn't shake the feeling that something had shifted.


Back at the villa, Andrew's unease deepened. His thoughts felt muddled, as if something vital had been misplaced. Kelly tried to distract him with conversation, but his responses were distant.

That night, he dreamed of a jungle alive with whispers. The voice of the monkey echoed in his mind: “A name that does not fit.”

Over the following days, small but unsettling things began to happen. Andrew found himself forgetting minor details—dates, words, even the names of places they had visited. At first, he dismissed it as jet lag or the heat. But then Kelly noticed it too.
“Andrew,” she said one evening, her voice tight with worry, “what's going on? You've been… different.”

“I don't know,” he admitted. “It's like… I'm losing parts of myself.”


They returned to the monkey forest, Andrew desperate for answers. The older monkey appeared again, as if it had been waiting.

“What did you do to me?” Andrew demanded, his voice trembling.

The monkey's eyes met his, calm and unwavering.

“I took your name,” the voice said. “It did not suit you.”

“Give it back,” Andrew said, anger and fear rising in equal measure.
The monkey tilted its head. “I cannot. Once taken, it is gone. But you will find another. One that fits.”

Andrew stared, his chest tightening. “Why me?”

The monkey's voice softened. “Not all names are meant to last. Some are borrowed. Some are shed. Yours had grown heavy, and you did not see it.”

As the monkey disappeared into the trees, Andrew felt a strange clarity. The fear that had gripped him eased, replaced by something quieter, more uncertain, but not unwelcome.


In the days that followed, Andrew began to feel lighter. His memory, though still patchy, didn't trouble him as much. He realized that the name he had lost—the identity tied to it—wasn't as essential as he'd once thought.

Kelly watched him with quiet concern, but as the trip came to an end, she noticed a change. Andrew was calmer, more deliberate in his actions.

On their last evening, as they sat on the veranda overlooking the jungle, Kelly broke the silence. “Do you feel different?”

Andrew thought for a moment. “Yes,” he said. “But maybe that's okay.”

The jungle hummed softly in the distance, the shadows deep but not threatening. And though the monkey and his name were gone, Andrew felt, for the first time in a long while, unburdened.

Somewhere in the dense greenery, the monkey watched, its knowing eyes glinting in the twilight. It had taken what was heavy, leaving behind something freer, something new.
`
  },
];

const introContent = {
  title: "Our Story Begins...",
  content: `My Dear Kelly,

Welcome to our magical collection of memories from the year we met. Each chapter holds a special moment we've shared, carefully preserved like snowflakes in this digital storybook.

This collection of stories is a journey across twelve worlds, each one reflecting a different kind of magic, love, and wonder. Inspired by our shared moments, favorite themes, and dreams, these tales were written as a way to capture the extraordinary in the everyday. They may seem fantastical, but at their heart, they're grounded in the essence of us—our laughter, our adventures, and our quiet reflections.

I wanted each story to feel like a small gift, carefully chosen and wrapped in imagination. Whether it's the whimsy of a magical ball, the quiet mystery of Bali, or the rhythm of a sky-pirate journey, these stories are pieces of the world I see when I'm with you.

So settle in and let's relive these precious moments together...

With love,
Andrew`
};

// Add sound effects
const pageTurnSound = new Audio('https://www.soundjay.com/page-flip-01.mp3');
pageTurnSound.volume = 0.5; // Adjust volume to 50%

function StoryModal({ open, onClose, title, subtitle, content }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="story-modal-title"
      aria-describedby="story-modal-description"
      sx={{
        backdropFilter: 'blur(8px)',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '80%', md: '60%' },
          maxHeight: '90vh',
          bgcolor: 'background.paper',
          borderRadius: '10px',
          boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
          p: 4,
          overflow: 'auto',
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(255, 255, 255, 0.98)',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c41e3a',
            borderRadius: '4px',
            '&:hover': {
              background: '#a01830',
            },
          },
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            bgcolor: 'rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease',
            zIndex: 10,
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.1)',
              transform: 'rotate(90deg)',
            },
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          id="story-modal-title"
          variant="h3"
          component="h2"
          sx={{
            mb: 2,
            color: '#c41e3a',
            textAlign: 'center',
            fontWeight: 700,
            fontFamily: '"Dancing Script", cursive',
            letterSpacing: '-0.5px',
            fontSize: '2.5rem',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            color: '#666',
            textAlign: 'center',
            fontStyle: 'italic',
            fontSize: '1.1rem',
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          id="story-modal-description"
          sx={{
            color: '#2c3e50',
            lineHeight: 1.6,
            fontSize: '1.1rem',
            whiteSpace: 'pre-line',
            textAlign: 'justify',
            fontFamily: '"Quicksand", sans-serif',
            animation: `${storyFadeIn} 0.8s ease-out`,
            px: 3,
            py: 2,
            '& p': {
              marginBottom: '2em',
              maxWidth: '65ch',
              margin: '0 auto 2em auto',
            },
            '& strong': {
              color: '#E67E22',
              fontWeight: 600,
              padding: '0 2px',
            },
            '& em': {
              fontStyle: 'italic',
              color: '#D68910',
              padding: '0 2px',
            },
            '& p:first-of-type': {
              fontSize: '1.1rem',
              fontWeight: 500,
              color: '#34495e',
              borderLeft: '3px solid #c41e3a',
              paddingLeft: '1em',
              marginBottom: '2em',
              background: 'linear-gradient(to right, rgba(196, 30, 58, 0.1), transparent)',
              padding: '1em',
              borderRadius: '0 4px 4px 0',
              maxWidth: '100%',
            },
            '& p:last-child': {
              marginTop: '2em',
              fontStyle: 'italic',
              textAlign: 'right',
              color: '#7f8c8d',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              paddingTop: '1em',
              maxWidth: '100%',
            },
            '& > *': {
              marginBottom: '1.5em',
            },
            '& > *:last-child': {
              marginBottom: 0,
            },
            '& br': {
              display: 'block',
              content: '""',
              marginTop: '1em',
            },
          }}
        >
          {content}
        </Typography>
      </Box>
    </Modal>
  );
}

function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);

  const playPageTurn = () => {
    pageTurnSound.currentTime = 0; // Reset sound to start
    pageTurnSound.play().catch(e => console.log('Error playing sound:', e));
  };

  const handleStoryOpen = (story) => {
    playPageTurn();
    setSelectedStory(story);
  };

  const handleStoryClose = () => {
    playPageTurn();
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedStory(null);
      setIsFlipping(false);
    }, 500);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(230, 126, 34, 0.9) 0%, rgba(241, 196, 15, 0.9) 100%)',
        py: 6,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="rgba(255,255,255,0.05)" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 1,
          animation: `${sparkle} 20s linear infinite`,
          backgroundSize: '400% 400%',
          pointerEvents: 'none',
        },
      }}
    >
      <Container 
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          pb: 6,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          onClick={() => window.location.href = '/'}
          sx={{
            color: '#c41e3a',
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            fontFamily: '"Dancing Script", cursive',
            letterSpacing: '-0.5px',
            fontSize: '4rem',
            animation: `${float} 6s ease-in-out infinite`,
            background: 'linear-gradient(90deg, #c41e3a, #ff4d4d, #c41e3a)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
            },
          }}
        >
          12 Short Stories
        </Typography>

        {/* Introduction Card */}
        <Paper
          elevation={12}
          sx={{
            p: 5,
            mb: 6,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 3,
            position: 'relative',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            animation: `${fadeIn} 0.6s ease-out`,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 48px rgba(0,0,0,0.2)',
            },
          }}
          onClick={() => handleStoryOpen(introContent)}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <BookIcon sx={{ fontSize: 40, color: '#E67E22', mr: 2 }} />
            <Typography
              variant="h3"
              sx={{
                color: '#E67E22',
                fontFamily: '"Dancing Script", cursive',
                fontWeight: 700,
              }}
            >
              Foreword
            </Typography>
          </Box>
          <Typography
            sx={{
              color: '#D68910',
              textAlign: 'center',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '1.2rem',
              fontStyle: 'italic',
            }}
          >
            Click to begin our journey...
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          {stories.map((story, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  animation: `${fadeIn} 0.6s ease-out ${index * 0.1}s both`,
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.2)',
                    '& .card-title': {
                      background: 'linear-gradient(90deg, #E67E22, #F1C40F, #E67E22)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundSize: '200% auto',
                    },
                  },
                }}
                onClick={() => handleStoryOpen(story)}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    className="card-title"
                    sx={{
                      color: '#E67E22',
                      fontWeight: 700,
                      textAlign: 'center',
                      mb: 2,
                      fontFamily: '"Dancing Script", cursive',
                      fontSize: '2.5rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {story.title}
                  </Typography>
                  {story.subtitle && (
                    <Typography
                      sx={{
                        color: '#D68910',
                        textAlign: 'center',
                        fontStyle: 'italic',
                        fontSize: '1.3rem',
                        fontFamily: '"Quicksand", sans-serif',
                        mb: 2,
                        opacity: 0.9,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          opacity: 1,
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      {story.subtitle}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      color: '#D68910',
                      textAlign: 'center',
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      fontFamily: '"Quicksand", sans-serif',
                      opacity: 0.9,
                      transition: 'all 0.3s ease',
                      mt: 2,
                      '&:hover': {
                        opacity: 1,
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Turn the page to read our story...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <StoryModal
          open={!!selectedStory}
          onClose={handleStoryClose}
          title={selectedStory?.title}
          subtitle={selectedStory?.subtitle}
          content={selectedStory?.content}
        />
      </Container>
    </Box>
  );
}

export default Stories; 