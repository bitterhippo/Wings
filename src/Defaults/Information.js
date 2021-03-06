import React from 'react';

//Subcomponents
import { StyledLink } from '../Components/PPC/Text/StyledLink';
import { ExpandableDiv } from '../Components/Expandable/ExpandableDiv';

export const InformationDefaults = {
  ServerInformation: {
    data: <>
      <br />
      <br />
      This is a basic run-down of our server settings, as well as a brief explanation to any custom changes made to the server that deviate from normal era. You may find additional answers to questions in our FAQ, otherwise ask in our Discord.
      <br />
      <br />
      <b>Level Cap:</b> 75. <br />
      <b>Expansion Era:</b> Wings of the Goddess. <br />
      <b>Cutoff Date:</b> March 23rd, 2010. This was the final patch before Abyssea prepatch changes started happening. <br />
      <b>Movement Speed:</b> 40. (Base WOTG era.) <br />
      <b>Crafting Rates:</b> 1.0. <br />
      <b>Skillup Rates:</b> 1.0. <br />
      <b>Experience Rates:</b> 1.0. Wings of the Goddess enhanced Signet is also available. <br />
      <b>Dual Boxing:</b> Not allowed. 1 character logged in per IP, enforced by the server's software. <br />
      <b>Fields of Valor:</b> Enabled, one page per game day as in era. <br />
      <b>Wardrobes/Sack:</b> Unlocked with mission progress. (Nation, Zilart, CoP, and ToAU for Wardrobes; WotG for Sack) <br />
      <b>Auction House:</b> Player stocked. 30 days lifespan for listings. <br />
      <b>Outpost Warps:</b> Can utilize gil only, as in era. <br />
      <b>Instant Re-raise / Instant Warp:</b> Original, higher CP cost. <br />
      <b>Addon Scenarios:</b> A Crystalline Prophecy is enabled. The rest will probably be added later in server's life. <br />
      <b>Gardening:</b> Enabled. <br />
      <b>Crafting Myth:</b> Removed.<br />
      <br />
      <br />
      <b>Yell</b>: Enabled globally on a 15 minute cooldown.<br />
      <b>Linkshell Concierge</b>: Enabled. The Linkshell Concierge NPCs are NPCs that will allow recruiting linkshells (aka guilds) and new players to meet. Linkshell owners can speak to these NPCs and add linkpearls to them to hand out, and new players can use these NPCs to browse and join a new guild. If you're just starting out and want some new friends, try out the Linkshell Concierge! See this page to find your nearest Linkshell Concierge.<br />
      <b>Maps</b>: Characters automatically start with all maps unlocked.
      Chocobo Quest: Current retail wait times (1 real-life minute between feeding the chocobo for Chocobo's Wounds quest).
      Dynamis Lockout: 71 Hours. (Changed from era's 72 hour lockout.)
      ??? Respawns: 5 Minutes. <br />
      <b>HNMs</b>: Ground kings (wyrms, adamantoise, and behemoth) will be spawned using spawned items gained from KSNM99 battles with their corresponding NQ versions. All other NMs will remain in their normal spawn locations. <br />
      <b>RMT Changes</b>: RMT changes have been reverted and moved to their original locations for the following items. This means no versions of the following drop from corresponding battlefiends. <br />
      <ul>
        <li>Cross-Counters (Western Shadow)</li>
        <li>Eurytos???s Bow (Eastern Shadow)</li>
        <li>Leaping Boots (Leaping Lizzy)</li>
        <li>Ochiudo???s Kote (Mee Deggi the Punisher)</li>
        <li>Fuma Kyahan (Quu Domi the Gallant)</li>
        <li>Peacock Charm (Argus)</li>
        <li>Speed Belt (King Arthro)</li>
        <li>Healing Staff (Roc)</li>
        <li>Strider Boots (Simurgh)</li>
        <li>Archer???s Ring (Stroper Chyme)</li>
        <li>Kraken Club (Lord of Onzozo)</li>
        <li>Astral Ring (Coffer chests in Castle of Oztroja)</li>
        <li>Emperor's Hairpin (Valkurm Emperor)</li>
      </ul>
      <b>Loot</b>: Chests and Coffers are instant repops to allow access to quest items for players. Players who open coffers or chests for loot will incur a 30-minute zone-wide illusion timer that will not allow them to open another coffer or chest to gain loot until the illusion timer wears off.<br />
      <b>Beastmaster</b>: All high quality versions of Beastmaster jug pets have had their level cap raised to level 75. Normal quality versions retain their normal level caps.<br />
      <b>Crossbow Bolts / Wooden Arrow</b>: All jobs are able to equip, primarily for THF's benefit since it has no low level Marksmanship ammo.
    </>
  },
  Rules: {
    data: <>
      <br></br>
      <br></br>
      Wings strives to create a fun and friendly and fair environment to all players. <br />
      Therefore, by joining Wings you agree to the following rules and terms:
      <b><br />
        <br></br>
        Any of the following activities may lead to permanent ban without warning</b><br></br>
      <ul>
        <li>
          RMT (Real Money Trade) - Any activity involving real world money, including the sale or purchase of accounts, in-game currency and/or items. This rule also extends to the trading of in-game services for out-of-game forms of currency, including things like Twitch subscriptions, channel points, etc as these are tied directly to actual forms of currency. All in-game commerce is limited to in-game currency. Any RMT activity will lead to an immediate and permanent ban of both the seller and the buyer.
          Multiboxing. Wings has a custom built anti-multiboxing login server, and using any sort of means to bypass the single-character login restriction is strictly against the rules. If you have multiple players who live in the same household full-time, please create an IP exception ticket via our Discord GM ticketing system and a staff member will guide you through the process.
        </li>
        <li>
          The use of unauthorized addons or plugins. Please scroll below to learn more information about the types of addons and plugins that are allowed. If you think an addon you would like to use may potentially be against the general rules, please reach out to a staff member in Discord by making a GM ticket and ask befor using it. Claiming that "it wasn't specifically listed on the rules page" will not pardon you of consequences should you be found using any type of addon that is not allowed.
        </li>
        <li>
          MPK (Monster Player Killing) - Intentionally attempting to cause the KO of another player, either by luring monsters to attack players or any other means.
        </li>
        <li>
          Exploiting any bugs or oversights in order to gain an unfair advantage over other players, be it in adventuring or commerce. Finding and reporting such bugs without taking advantage of them is not considered a violation as long as it does not impact the server performance and/or stability. We therefore encourage making use of the beta test server or a local copy of the server for bug hunting. Bug hunting on the live server is not allowed, and will not pardon you of any consequences should your actions be considered cheating or affect the server in a negative way.
        </li>
        <li>
          Botting - Using any third party tools or scripts which automate player activity, other than tools explicitly allowed and the in-game macro feature. This includes things like infinite loop scripts to skill up magic skill, infinite crafting beyond what is possible with a /waitsynth macro, fishing bots or any type of scripted actions that require zero player input.
        </li>
        <li>
          Tool assisted claiming of any kind will be met with an immediate ban. While we don't expect this to come up often due to the nature of how Notorious Monsters are set up on Wings, please be aware that we ARE able to detect these.
        </li>
        <li>
          Using explicitly disallowed third party tools or addons.
          Ignoring or disobeying instructions from GMs (Game Masters), who may monitor game activity either visibly or hidden. If a GM gives you a direct order, follow the order, even if it is not explicitly mentioned in the rules. While you may not find it to be fair in the moment, instead of going off on that GM, simply do what they say and then reach out to a senior GM in the discord or forums for further assistance, where you will have a fair chance to speak out.
        </li>
        <li>
          Using inside information - Inside information is any information you have which is not public knowledge. Any act upon that information which might give either you or a third party an advantage over those who don't have it will lead to an immediate ban, even if you were given the information through official channels. This includes passing the information to third parties.
        </li>
        <li>
          Repeated violation of any other rule after being warned.
          Please note that "permanent ban" means you will not be allowed to create another character and/or another account and we will immediately ban any such accounts when found, even if the new character was not caught in violation of the rules again. Furthermore, anyone knowingly interacting with such characters may be subject to punitive actions as well, which means that by insisting on playing after having been permanently banned you pose risk to your friends as well. Our best recommendation is to avoid being banned and not find yourself in such a situation to begin with.
        </li>
      </ul>
      <br></br>
      <b>Other rules</b>
      <br></br>
      These following activities are forbidden and violations will be enforced and violations may lead to various penalties according to GM discretion.
      <ul>
        <li>
          Harrassment of any other player after being told to stop once by any staff member. (Orange names in Discord, or in-game GMs.)
        </li>
        <li>
          Any form of racism, including, but not limited to, skin color, sex or sexual orientation, religion, ethnicity, country etc.
        </li>
        <li>
          Asking for information regarding players' personal (i.e. real-world) life or identity if they do not wish to disclose it.
        </li>
        <li>
          Using foul language or deragatory terms in yells.
        </li>
        <li>
          Insulting or humiliating other players in public chats.
        </li>
        <li>
          Account sharing is not allowed. This is tracked and can easily be detected. Furthermore, if your friend cheats, you may suffer the consequences with them if they get caught. Better to be safe than sorry.
        </li>
        <li>
          Not responding to GM messages while your character is not idle, as this may be an indication of botting. Using third party tools or addons to gain an unfair advantage - If such a tool or addon is not on the explict allowed or disallowed list, please use common sense. If uncertain, ask a GM or administrator.
        </li>
        <li>
          Market manipulation or any kind, including faux sells on the auction house for the purpose of wiping the sale history, price fixing or otherwise any means of blocking healthy competition. This is easily tracked. Beyond any type of suspension/ban that may incur, your fellow players will probably judge you pretty harshly since it isn't hard for them to figure out what's happening. Don't be that guy/girl.
        </li>
        <li>
          Navmesh abuses are not allowed. A navmesh abuse is taking advantage of bugs in how mobs move to reach a position where you can hit the mob but the mob can't hit you or someone else from your party back (including healers). The rule does not apply when you're running for your life with no intention of fighting.
        </li>
        <li>
          Obtaining and/or using OOE items that were left due to an oversight (OOE = Out of Era, items that were not available in the WotG era). If such items are found in circulation they will be confiscated and no refund will be given.
        </li>
        <li>
          Intentionally dying shortly before conquest tally in order to hinder another nation's effort is not allowed. GMs are monitoring conquest regions and will know if that happens.
        </li>
        <li>
          Knowingly aiding cheaters is an offense even if the assistance itself would not have been considered cheating otherwise. This includes helping people who have been permanently banned create and level a new character.
        </li>
        <li>
          Not reporting leaked information - Should you obtain any information which is not public knowledge by unofficial means (i.e. leak) you are required to report that in a GM ticket. Should such a leak occur anyone with knowledge of the information will be penalized, even if they did not act upon it.
        </li>
        <li>
          Power leveling (PL), i.e. the use of a 3rd party to gain experience faster than normal, is not prohibited by itself, however advertising or asking for such services on public channels (yells, the server Discord) is not allowed.
        </li>
      </ul>
      <b>Mordion Gaol (AKA Jail)</b>
      <ul>
        <li>
          You may end up in Mordion Gaol either manually by a GM or by an automated jailing system designed to detect and take action against known cheating methods.
        </li>
        <li>
          If you were jailed by a GM, they are likely to show up and talk to you. Answer all questions honestly, as they have access to logs and can verify your claims.
        </li>
        <li>
          If you were jailed by the automated cheat detection system, you will see an NPC named "Read Me", please speak with it in order to find out what to do next.
        </li>
        <li>
          In either case, please be aware that our logging keeps very detailed track of player actions. These will need to be manually reviewed by the GM team and may take some time to review as a group before coming to a decision.
        </li>
        <li>
          Do not immediately disconnect if you're jailed. If you disconnect immediately, the staff will not be able to easily get a hold of you. Furthermore, disconnecting immediately after being sent to jail is a pretty obvious sign that you have something to hide. If you need to log out before a GM speaks with you, put in a GM ticket on Discord to let someone know you're in Mordion before you log off including your full character name and what you were doing at the time you were dragged to Mordion.
        </li>
      </ul>
      <b>Yells</b>
      <br />
      <br />
      The /yell command is a server-wide command. To prevent abuse, its use is limited to once every 15 minutes.
      In order to avoid too many irrelevant yells, the use of yells is limited to certain purposes, described below.
      Any misuse of the yell command may lead to a mute (i.e. denial of the ability to use the yell command) for a period of time which begins in one week and increases after each repeat offense, eventually becoming permanent. Severe cases (e.g. racism) may result in an immediate permanent mute.
      By default the use of the yell command is disabled. Players are required to read and agree to these rules, including the lists of allowed and disallowed purposes below, before they can use the yell command. If you agree to the rules type "!yell iagree" in the in-game chat to enable use of the yell command.

      Allowed:
      <ul>
        <li>
          Commerce (Want to buy/sell/trade) items, teleports, mercenery services etc (exception: paid power leveling is not allowed, see above).</li>
        <li>
          Parties (looking for party/looking for members)
        </li>
        <li>
          Linkshells (looking for LS/looking for members)
        </li>
        <li>
          Asking for help / offering help
        </li>
        <li>
          Asking game related questions
        </li>
      </ul>
      Not allowed:
      <br />
      <ul>
        <li>
          Spamming
        </li>
        <li>
          Any offensive language, including random insults
        </li>
        <li>
          Offering services that violate the rules
        </li>
        <li>
          Offering or asking for paid power leveling services
        </li>
        <li>
          Replying to quetions that have already been answered
        </li>
        <li>
          Random chatting
        </li>
        <li>
          Asking for GM help more than once
        </li>
        <li>
          Any non-FFXI related talk
        </li>
      </ul>
      <b>Addons / Plugins</b>
      <br />
      While most servers have a specific list of allowed/disallowed Ashita / Windower addons to use, we find it easier to instead list out the types of addons that are not allowed, and then point out any specific ones as a reference. If you think an addon you would like to use may potentially be against the general rules, please reach out to a staff member in Discord by making a GM ticket and ask befor using it. Claiming that "it wasn't specifically listed on the rules page" is not an acceptable excuse to use these addons.
      <ul>
        <li>
          Auction house addons of any kind are not allowed. This includes any addon that either allows you to open the auction house from anywhere except an auction counter, or any addon that interacts with the auction house in any way. This includes auction scanners, listers, etc. Exception: InstaAH or any Windower equivalent are allowed as long as they do not do anything other than remove the delay.
        </li>
        <li>
          Targeting addons. This includes addons similar to SetTarget. The use of Shorthand for target claiming is also not allowed, and is easily trackable.
        </li>
        <li>
          Any position or speed hack. The server is set up to detect these automatically and the use of them will likely trigger the autojail feature.
        </li>
        <li>
          Healbot. While this likely won't be as much of an issue due to there being no dual boxing, anyone found to be using an addon that automates actions will be banned.
        </li>
      </ul>
      <b>Note:</b> Ashitacast and Gearswap ARE allowed but only for the purpose of changing gear. These addons serve a similar function to what in-game macros can accomplish and thus have been approved for use. Happy swapping.
      <br />
      <b>GMs / Staff</b>
      <ul>
        <li>
          Remember that when interacting with staff members, you are expected to handle yourself respectfully and appropriately. All of our staff members are offering their help to the server often at the expense of their own play time, and they're all adults with families, jobs, and other responsibilities. There may sometimes be a delay in their ability to help you with an issue due to this. Being rude to staff who are trying to help you is a surefire way to not be helped again in the future. Please treat our volunteers with the respect that they deserve for helping deliver something that you enjoy so much.
        </li>
        <li>
          If you are having an issue, DO NOT reach out to a staff member via Discord DMs or in-game on their player characters (which have no GM permissions and therefore cannot help you). The correct course of action is to use the Discord GM ticketing system.
        </li>
        <li>
          If you are having an issue, DO NOT reach out to a staff member via Discord DMs or in-game on their player characters (which have no GM permissions and therefore cannot help you). The correct course of action is to use the Discord GM ticketing system.
        </li>
        <li>
          Keep in mind that the only people who can help you with server-related issues are Game Masters and Staff Members. These people are brown and orange names in Discord. Any other people in Discord with colored names are likely community support specialists who provide value to the server in various ways that do not include Game Master responsibilities. Please do not reach out to those people asking for Game Master related isues.
        </li>
        <li>
          Do not contact developers regarding GM issues, since not all developers are Game Masters (in fact most of them are not) and not all Game Masters are developers. Any issues that affect you specifically should be reported using the Discord ticketing system. Any issues that affect the entire server should be reported on the project bugtracker.
        </li>
        <li>
          The Game Masters are trusted to exercise their best discretion when helping players. This means that the GM that is helping you with your ticket may not handle it exactly the same way that a previous GM may have. If you have an issue with how a situation was handled, feel free to open a new ticket and a different member of staff can verify that things were handled appropriately.
        </li>
        <li>
          Game Masters will <b>not</b> intervene in situations that can be remedied via the use of the blacklist function, however Game Masters may step in if harassment escalates beyond a point at which a player cannot simply "block and move on." This includes targetted harassment of a player via in-game griefing, MPK, abuse of the mail system, etc. This does not extend to things like economic competition, NM camping, etc.
        </li>
        <li>
          Game Masters will <b>not</b> intervene if a player's actions do not violate the rules, even if they are "not nice". Please read the rules and verify that the player is indeed in violation before reporting them.
        </li>
        <li>
          Game Masters will not intervene in cases where a glitch occurs as a result of user error or incorrect addons/versions causing issues, e.g. cutscenes hanging, in-game messages being incorrect, etc. GMs will advise you to download the Wings installation and try again.
        </li>
        <li>
          Game Masters will usually not intervene in cases where a self-service function is available, such as not being able to move (use !unstuck) or password resets. If you believe your case is an exception please describe in your GM ticket why the self-service option did not help.
        </li>
      </ul>
      <b>Terms of Service</b>
      <br></br>
      By playing on Wings you agree to the following:
      <ul>
        <li>
          Wings (hereof known as "the service") is a free of charge service provided on an "AS IS" basis without any warranty, guarantee or liability.
        </li>
        <li>
          The service operators (including, but not limited to, server administrators, game masters, developers, testers and other contributors) will not be held liable for any damage, either explicit or implicit, incurred as a result of using the service by anyone, under any circumstances, even if advised of such a possibility beforehand.
        </li>
        <li>
          Final Fantasy XI, Final Fantasy, Wings of the Goddess and related terms are trademarks of Square-Enix LTD. Final Fantasy XI is ?? Square-Enix LTD.
        </li>
        <li>
          The "Wings" service operators are not affiliated with Square-Enix LTD in any way. If Square-Enix LTD or its authorized representatives request the shut-down of the service, the service opeators will comply immediately.
        </li>
        <li>
          The service operators are not required to keep the service online for any time period or at all.
        </li>
        <li>
          The service is subject to the laws of France, Germany and the European Union.
        </li>
        <li>
          The operators do their best to keep the service secure, however even if a security breach does occur, the operators will not be held liable for any damages, even if advised of such a possibility beforehand.
        </li>
        <li>
          The use of this service is a privilege, not a right. The operators reserve the right to remove anyone from the service for any reason, with or without warning, at their sole discretion.
        </li>
        <li>
          Players are required to remain in compliance with all rules mentioned in this page.
        </li>
        <li>
          The following data collection and usage policy and chat logging policy are a part of these terms of agreements.
        </li>
      </ul>
      <b>Data collection and usage policy</b>
      <br />
      As part of the server's operation, we collect various information regarding users. By registering and playing you agree to the collection of the following information:
      <ul>
        <li>
          All data provided as part of your registration, including your username and email address. We keep track of the initial email address used for registration even if changed later.
        </li>
        <li>
          Login dates and origiating IP addresses to both the website and the game are logged. This is used to detect account-sharing, dual-boxing and attempted re-registrations of players banned in the past.
        </li>
        <li>
          Email addresses collected will be used to send email verifications for signing-up to the service (AKA activation), for resetting forgotten passwords, in case GMs wish to validate the identity of users and for important announcements. The addresses will not be shared with any 3rd parties unless required by law.
        </li>
        <li>
          In-game trading is logged, including use of the auction house, bazaar sales and trades between players in order to detect and prevent fraud and help to revert situations where such cases occur.
        </li>
        <li>
          The use of certain "self service" server commands (such as !unstuck) is logged in order to prevent them from being abused for purposes other than intended.
        </li>
        <li>
          Any cheating incidents are logged and tracked by both automatic processes and manually by GMs. Administrators and GMs keep track and share information regarding suspected cheating and rule violations among themselves, including the names of characters invloved.
        </li>
        <li>
          The website uses cookies to facilitate its normal operation and for usage analytics.
        </li>
        <li>
          The collected information will not be shared with 3rd parties except for standard web analytic services. Personally identifying information will not be shared with 3rd parties unless required by law.
        </li>
        <li>
          If the operators of the service decide to cease the operation of the service on their own accord, they may transfer the user and character data to a 3rd party who wishes to create a similar service. In such case you will have the right to be excluded from the transfer.
        </li>
      </ul>
      <b>Chat logging policy</b>
      <br />
      The in-game chat feature may be logged and monitored, subject to the following policy:
      <ul>
        <li>
          Messages sent to all players connected to the server, such as yells and system messages, are always logged and are not subject to the rest of this policy.
        </li>
        <li>
          Non-serverwide messages are not logged by default but senior GMs may enable logging of chat messages on a player or linkshell basis.
        </li>
        <li>
          If logging is enabled for a specific player, all messages sent and received by that player will be logged. This includes area messages (e.g. say) that the player happened to hear.
        </li>
        <li>
          If logingg is enabled for a linkshell, all messages going through that linkshell will be logged, however this will not be extended to messages sent by members in other channels.
        </li>
        <li>
          Senior GMs may enable logging for a person or linkshell if they have reason to believe a violation of the rules is taking place. Monitored chat messages will only be viewed by senior GMs.
        </li>
        <li>
          In addition, logging may be enabled, at GMs' discretion, by players' request in order to handle certain tickets, such as serious harassment cases.
        </li>
        <li>
          Logged chat messages will not be shared with any 3rd parties unless required by law.
        </li>
        <li>
          Exception to the above rule: In case of an indication of a potential serious real-life crime, the service operators reserve the right to voluntarily disclose the logs to law enforcement.
        </li>
        <li>
          Logs will be deleted once the incident which prompted the logging has been resolved, regardless of whether an action has been taken or not.
        </li>
      </ul>
    </>
  },
  HowtoConnect: {
    data: <>
      <br />
      <br />
      <b>Set up</b>
      <br />
      <br />
      If you're new here, follow these steps to get your game up and running!
      <ul>
        <li>Register your account here: Sign up page.</li>
        <li>Confirm your email address in the followup email.</li>
        <li>Download and install the Wings client, which can be downloaded here**: Download torrent</li>
        <li>Once you have installed the client and registered your account, you're all set to play!</li>
      </ul>
      <i>**You'll need a torrent application in order to download it, we generally would suggest uTorrent or BitTorrent, as these are the two most well-known programs for this. The installer comes pre-loaded with basically everything you need to get started right away!</i>
      <br />
      <br />
      If you require additional help getting everything up and running, feel free to visit our Discord channels for #installation-help and #tech-support.
      <br />
      <br />
      Individual Downloads
      <br />
      <br />
      Video Tutorials
      <br />
      <br />
      We've also made a few video tutorials to help players get their client set up. You can also find these (and probably many more like them) in our Discord in the #video-tutorials channel.
      <ul>
        <li>Adjusting your settings to improve quality of life. -Gweivyth</li>
        <li>Setting up Ashenbub's HD packs. -Ashenbubs</li>
        <li>Switching between private servers? No problem! -Gweivyth</li>
        <li>Ashita, and everything you ever wanted to know about it. -Gweivyth</li>
      </ul>
    </>
  },
  Support: {
    data: <>
      <br />
      <br />
      Please select the appropriate topic:
      <br />
      <br />
      <ExpandableDiv
        text={<>I cannot log-in</>}
        hiddenText={<>
          <br />
          There are a number of issues that could prevent you from logging in. Here are the most frequent ones:
          <ul>
            <li>
              If you've just signed up you must validate your account before you can log-in. Please check your e-mail and click the validation link.
            </li>
            <li>
              There is already someone playing from your IP address. Wings does not allow dual-boxing, therefore once an IP address is associated with an account, no other account can log-in from the same IP address unless given an exception by a GM or an administrator. Generally we give such exceptions only in case of several people living together (e.g. family members). We do not give temporary exceptions, therefore playing from a friend's house is not possible. We will also not give an exception to IP addresses associated with VPN services.
            </li>
            <li>
              You are using a VPN service. Connections from anonymizing VPN services are not allowed. Please disconnect from the VPN and try again.
            </li>
            <li>
              There is a problem with the game client installation on your computer. This is probably the case if the login succeeds but the bootloader closes without launching the game. This sometimes happens when using multiple installations for different servers. You may need to reinstall the game. We generally recommend using a single installation, and either utilizing a switch batch file or XIPivot in these situations.
            </li>
            <li>
              The server could be down for maintenance. Please check for any announcements on discord.
            </li>
          </ul>
        </>}
      />
      <br />
      <ExpandableDiv
        text={<>My character is stuck!</>}
        hiddenText={
          <>
            <br />
            If you cannot move your character or your character is stuck off map you can type the "!unstuck" command in the chat line.
            This command will warp you to your home point after 20 minutes.
            Please note that in order to prevent abuse of this command as free warps you will receive a terror status (your character will be unable to move or otherwise act) for 20 minutes and will only be teleported after the 20 minute wait ends. The use of this command is logged and players abusing it may receive punitive actions.
            Due to technical limitations this command cannot be cancelled once triggered, therefore we recommend only using it as a last resort.
            <br />
            <br />
            If your character is stuck in a cutscene, you can type !release to be removed from the cutscene. Please note that use of !release may interfere with your ability to progress with quests until the cutscene is finished properly. Using this command will not incur the same penalty as the !unstuck command.
            <br />
            <br />
          </>}
      />
      <br />
      <ExpandableDiv
        text={<>The game is hanging, has crashed, or black screened during a cutscene!</>}
        hiddenText={
          <>
            <br />
            This is a very common issue which happens due to using an incorrect game client version. The most common examples are the mission 2-3 dragon fight and the mission 5-2 shadow lord fight (though it may happen in other cases as well). Please make sure you are either using the latest version of the Wings installer or the XiPivot addon with the latest Wings installation data files.
            If your game is stuck during a cutscene it maybe possible to skip the cutscene by typing the "!release" command in the cat line, however this is not guaranteed to work.
            <br />
            <br />
          </>}
      />
      <br />
      <ExpandableDiv
        text={<>A player is harassing me in game!</>}
        hiddenText={
          <>
            <br />
            You can use the /blacklist command to block players from contacting you in-game. If you believe the issue requires GM intervention, and only after you have told the player to stop at least once, please take a screenshot of the incident and open a GM ticket. Your ticket should include a link to the screenshot (please upload it to any free image hosting sevice prior to opening the ticket).
            <br />
            <br />
          </>}
      />
      <br />
      <ExpandableDiv
        text={<>I would like to report a violation of the Wings rules or terms of service!</>}
        hiddenText={
          <>
            <br />
            Please read the rules page carefully and verify that this is indeed a violation of the rules or terms of service as described. If this is indeed a violation please take a screenshot of the violation and upload it to a free image hosting service in order to be able to back your claim, as we will be not be taking action in case of one person's word against the other (innocent unless proven guilty). When contacting a GM please provide a link to the screenshot.
            <br />
            <br />
          </>}
      />
      <br />
      <ExpandableDiv
        text={<>My party list does not show up properly!</>}
        hiddenText={
          <>
            <br />
            Please type the "!re" command in the chat line to reload your party list.
            <br />
            <br />
          </>}
      />
      <br />
      <ExpandableDiv
        text={<>I would like to report a bug!</>}
        hiddenText={
          <>
            <br />
            Before opening a bug report please make sure to perform the following action:
            <ul>
              <li>
                Use a reliable resource such as FFXIClopedia to verify whether this is indeed a bug. By default FFXIClopedia described the behavior of the current retail version, therefore you will need to open the page history of the article and select the last edit of the page before March 2010, which is the cutoff date for Wings. If the observed behavior matches the behavior described in that edit, then it is by design.
              </li>
              <li>
                Make sure you are using the latest version of the Wings installer to exclude the possibility that the bug is a client side issue. We will not be taking bug reports when an incorrect client version is used.
              </li>
              <li>
                Search the bugtracker and check whether the issue has already been reported. If it has, there's no need to report it again. If you have further information to add, please add it as a comment in the existing report rather than submit a new one.
              </li>
            </ul>
            Only after performing all the above checks, if it is still relevant, you can open a new issue in our bugtracker. When reporting the issue, make sure to provide your client version (type /ver in-game).
            <br />
            <br />
          </>
        }
      />
      <br />
      <ExpandableDiv
        text={<>My problem is not listed or the answer was not helpful </>}
        hiddenText={
          <>
            <br />
            Please contact a GM for further assistance. GM tickets are only able to be made in Discord at this time. Please follow this link to find the correct channel, and please read the instructions on the channel carefully when making your ticket.
            <br />
            <br />
          </>}
      />
    </>
  },
  FAQs: {
    data: <>
      <br></br>
      <br></br>
      <b>Frequently Asked Questions</b>
      <br></br>
      <br></br>
      Thanks for checking us out! This is going to be a brief bullet point styled FAQ answering many of our most frequently asked questions.
      <br></br>
      <br></br>
      <b>Account-Related</b>
      <br></br>
      <br></br>
      <b>Can I transfer my character from ?</b>
      <br></br>
      <br></br>
      No. We're aware that "you guys could have so many more players if you allowed transfers!" Everyone has to start fresh on Wings.
      <br></br>
      <br></br>
      <b>Dual boxing?</b>
      <br></br>
      <br></br>
      No. The server only allows one account to be created per unique IP address. You may have up to 3 characters created on your account, however it is not possible to log them in simultaneously. For any household that has multiple players, please reach out to a staff member and they can assist in setting up an exception for you and your housemate.
      <br></br>
      <br></br>
      <b>I need an IP exception for my brother / sister / son / mother / dog / random relative living with you</b>
      <br></br>
      <br></br>
      First one of you needs to already have an account. Once the first account is made, join our Discord and contact the GMs and give the username of the first account. We will tell you when you can create the second account. We usually process IP exception requests on a weekly basis so please be patient.
      * You will not get an account for your dog.
      <br></br>
      <br></br>
      <b>Name/Race Changes?</b>
      <br></br>
      <br></br>
      No. Not now and probably not ever. If you make a bad reputation for yourself you gotta live with it or reroll. Sorry.
      <br></br>
      <br></br>
      <b>Gameplay Features</b>
      <br></br>
      <br></br>
      <b>Mog Wardrobes?</b>
      <br></br>
      <br></br>
      Yes! To start, fresh characters will not have any Mog Wardrobe access, however as you progress thru various storylines (Nation missions, CoP, ToAU, WoTG) you will unlock more slots of "extra storage." Depending on which mission, these mission unlocks can add anywhere from 1 to 10 extra slots to your Mog Wardrobe. While we won't be revealing exactly which missions add how many slots, you will find that most rank up missions reward a moderate number of extra slots.
      <br></br>
      <br></br>
      <b>Gardening?</b>
      <br></br>
      <br></br>
      Yes!
      <br></br>
      <br></br>
      <b>FoV? GoV?</b>
      <br></br>
      <br></br>
      FoV yes, GoV no. FoV is limited to one turn-in per Vana'diel day as it was during era.
      <br></br>
      <br></br>
      <b>Treasure caskets?</b>
      <br></br>
      <br></br>
      Yes!
      <br></br>
      <br></br>
      <b>Level sync?</b>
      <br></br>
      <br></br>
      Yes. Level sync will remain uncapped. Items will not sync down when level sync is applied, players must wear level-appropriate equipment when level sync'd.
      <br></br>
      <br></br>
      <b>RMT changes?</b>
      <br></br>
      <br></br>
      Sort of. Over the course of Wings' era, many Notorious Monsters had their loot changed to R/EX versions in the open world, and Rare versions in BCNMs. Since both of those systems would technically be "in era" for us, we chose to go with a mix of both. We have reverted ALL of those NMs so that they drop the Rare versions. R/EX versions are not available ANYWHERE. Other NMs that are more endgame focused were changed to be popped NMs instead of lotto NMs (like Sozu Rogberry for Thief's Knife as an example) and will still be popped. This change is mostly relevant to Sozu Rogberry and Ullikummi, although there are other examples as well. We wanted to appeal to both types of players, those that love the thrill of the camp and those that hate camping but love to grind, and so that's the system we chose.
      <br></br>
      <br></br>
      <b>Era cutoff?</b>
      <br></br>
      <br></br>
      This patch and everything before it. This was the final patch before Abyssea prepatch changes started being added.
      <br></br>
      <br></br>
      <b>Any specific, intentional out of era changes?</b>
      <br></br>
      <br></br>
      We use the KSNM99 system for ground kings. Players must fight KSNM99 versions of Behemoth/Adamantoise/Fafnir, then use dropped items to fight NQ version in open world. Open world versions have a chance to drop an HQ pop item for HQ version. We also raised all the HQ Beastmaster jugs to level 75 cap, and are offering access to Mog Wardrobes based on storyline progression.
      Additionally, the Chocobo license quest is 6 minutes instead of 6 real-life hours since the original wait time was painful and posed no real challenge.
      Other than these specific changes, everything else aims to be in-era.
      <br></br>
      <br></br>
      <b>Which jobs are available?</b>
      <br></br>
      <br></br>
      White Mage, Black Mage, Red Mage, Warrior, Monk, Thief, Paladin, Ranger, Dragoon, Summoner, Samurai, Ninja, Dancer, Dark Knight, Beastmaster, Bard, Corsair, Puppetmaster, Blue Mage and Scholar.
      <br></br>
      <br></br>
      <b>Are the auction houses linked?</b>
      <br></br>
      <br></br>
      Yep! That also includes Norg, Kazham, Aht Urghan Whitegate, etc. All auction houses are tied together.
      <br></br>
      <br></br>
      <b>Does this server have crafting myths enabled? (Moon phase, facing direction, etc.)</b>
      <br></br>
      <br></br>
      No. This was confirmed to be false by Square Enix and has been removed from Project Topaz completely. Face whatever direction you want, and craft whenever it suits you. It doesn't make a difference.
      <br></br>
      <br></br>
      <b>Random thing behaves differently than on that other server random private server.</b>
      <br></br>
      <br></br>
      We attempt to recreate the WotG era of retail, we do not copy customizations from other private servers. If something is not behaving accurately, please submit an Issue ticket so we can review it's behavior.
      <br></br>
      <br></br>
      <b>Is PLing allowed?</b>
      <br></br>
      <br></br>
      Dual-boxing is not allowed, therefore using an alt as a PL is forbidden, however having a friend as PL is allowed. There is no xp nerf for having a PL, even if the PL gets aggro.
      <br></br>
      <br></br>
      <b>When does the conquest tally occur?</b>
      <br></br>
      <br></br>
      Conquest currently happens at midnight CET (on Sundays), due to a historic technical issue. This is 6pm EST / 23:00 UTC / Monday 8:00 JST. This may be changed in the future but we make no promises either way.
      <br></br>
      <br></br>
      <b>I can't buy an instant warp scroll!</b>
      <br></br>
      <br></br>
      The era price of an instant warp scroll is 750CP. It has been lowered to 10CP way later but since the listed price is hardcoded in the client we cannot change it, especially if you're not using the official Wings installer. The server will display a message though. Warps were never easy and free in era and warp scrolls were mostly used in emergencies, not on an everyday basis.
      <br></br>
      <br></br>
      <b>I can't buy a warp ring / my warp ring doesn't work!</b>
      <br></br>
      <br></br>
      These are way out of era. Due to it being hardcoded in the client (if you're not using the official Wings installer) we cannot remove it from the list of purchasable items however you will not be able to actually purchase it. Due to an oversight a small number of players were able to purchase the item when the server just launched. While the rings were not removed from their inventories they have been disabled and are no more than a decoration now.
      <br></br>
      <br></br>
      <b>My homing ring doesn't work!</b>
      <br></br>
      <br></br>
      The homing ring works only if both of the following conditions apply: (A) You've already ran the supply mission to the region's outpost and (B) Your nation currently has control of the region. If your nation loses control of the region you will not be able to use homing rings in that region until your nation takes control of the region again.
      <br></br>
      <br></br>
      <b>Why can't I pick up another FoV page!?</b>
      <br></br>
      <br></br>
      FoV is limited to one per game day in Wings of the Goddess era. Try again next VanaDay.
      <br></br>
      <br></br>
      <b>Other Miscellaneous Concerns</b>
      <br></br>
      <br></br>
      <b>I want to contribute to Wings!</b>
      <br></br>
      <br></br>
      Visit our #contribute channel in Discord to see how you can contribute to the project.
      <br></br>
      <br></br>
      <b>I want to join the development of Wings!</b>
      <br></br>
      <br></br>
      Wings is an open sourced project. We have a separate Discord for our code work, which can be found here. Our repository can be found here.
      <ul>
        <li>
          All code posted on this repository is an exact copy of the code running on the current live server!
        </li>
        <li>
          Everyone can download and modify code, as well as contribute back to the official Wings project, however the server owners reserve the right to decide which changes are actually merged into the official branch.
        </li>
        <li>
          Wings is licensed under the GNU AGPLv3, meaning that any other public servers built upon the Wings codebase must be open source as well.
        </li>
        <li>
          Developers who contribute regularly may be given an active developer status in our Project Discord, as well as be invited to chat on official Q&A development livestreams with the staff, etc.
        </li>
        <li>
          Since Wings is based on the now defunct Project Topaz, the code base is a combination of LUA, C++, and SQL.
        </li>
      </ul>
    </>
  }
};