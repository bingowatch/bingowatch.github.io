// IMPORTANT!
// Use '‑' Unicode NON-BREAKING HYPHEN (U+2011) in titles

const tiles = {

  // misc
  solo_ult: {
    name: 'Solo Ult',
    description: 'You got singled out with an ultimate.',
  },

  meme_strat: {
    name: 'Meme Strat Works',
    description: 'Either team wins a fight with Meme Strats.',
  },

  tank_deathmatch: {
    name: 'Tank in Deathmatch',
    description: 'A non-friendly Tank in a Deathmatch',
  },

  staggered: {
    name: 'Stagger',
    description: 'A team initiates a fight while down at least 1 player or a player dies between fights.',
    rules: ['Must have been preventable'],
  },

  backfill: {
    name: 'Backfill Loss',
    description: 'Join a game right before losing.',
  },

  double_shield: {
    name: 'Double Shield',
    description: 'There are 2 shields on either team.',
  },

  narnia: {
    name: 'Narnia',
    description: 'A player or ability ends up or is found in a distant part of the map.',
  },

  rolled: {
    name: 'Rolled',
    description: 'Either team finished a round with 3 minutes left.',
  },

  no_ot: {
    name: 'No Overtime',
    description: 'A round ended without going into overtime.',
  },

  touch_spawn: {
    name: 'Touch Spawn',
    description: 'Somone touches the other teams spawn door.',
  },

  deflect_beam: {
    name: 'Deflect Beam',
    description: 'Genji tried to deflect a beam.',
  },

  eat_beam: {
    name: 'Eat Beam',
    description: 'Someone tried to eat or deflect a beam.',
  },

  didnt_need_heals: {
    name: '"I didn\'t need heals"',
    description: 'You died right next to a support without getting healed.',
  },

  get_healthpack: {
    name: '"I\'ll get a healthpack"',
    description: 'Your support looks at you and decides you don\'t need healing.',
  },

  one_trick: {
    name: 'One Trick',
    description: 'Lose a game with a countered teammate that never swapped.',
  },

  qp_throw: {
    name: 'QP Thrower',
    description: 'Get a thrower in a QuickPlay match.',
  },

  say_cheese: {
    name: 'Say Cheese',
    description: 'Lose to a cheesy team comp.',
  },

  bugs: {
    name: 'Bugs',
    description: 'Encounter any bug (does not include well-known tech).',
  },

  bad_spawn: {
    name: 'Bad Spawn',
    description: 'Someone respawned right before the objective was captured.',
  },

  instaqueue: {
    name: 'Insta Queue',
    description: 'Your queue popped before 1 minute.',
  },

  team_kill: {
    name: 'Team Kill',
    description: 'It says this one in game.',
  },

  practice_10: {
    name: 'Practice makes Perfect',
    description: 'Win with one of your 10 least played heros.',
  },

  practice_5: {
    name: 'Practice makes Perfect',
    description: 'Win with one of your 5 least played heros.',
  },

  melee_final_blow: {
    name: 'Pow!',
    description: 'Get a final blow with melee.',
  },

  // kill streak

  streak_5: {
    name: '5 Kill Streak',
    description: 'Get 5 elims in 1 Life',
  },

  streak_10: {
    name: '10 Kill Streak',
    description: 'Get 10 elims in 1 life',
  },

  streak_15: {
    name: '15 Kill Streak',
    description: 'Get 15 elims in 1 life',
  },

  streak_20: {
    name: '20 Kill Streak',
    description: 'Get 20 elims in 1 life',
  },

  elims_25: {
    name: '25 Elims',
    description: 'Get 25 elims.',
  },

  elims_30: {
    name: '30 Elims',
    description: 'Get 30 elims.',
  },

  elims_35: {
    name: '35 Elims',
    description: 'Get 35 elims.',
  },

  elims_40: {
    name: '40 Elims',
    description: 'Get 40 elims.',
  },

  // chat

  open_mic: {
    name: 'Open Mic',
    description: 'Someone forgot to turn off open mic, oops (or other VC issues).',
  },

  copium: {
    name: 'Copium',
    description: 'According to chat, they only lost because of...',
  },

  me_diff: {
    name: '"Me Diff"',
    description: 'Someone said <their own role or hero> diff after winning.',
  },

  empty_full_vc: {
    name: 'Empty or Full VC',
    description: 'Everyone/Nobody is in team voice chat.',
  },

  positive_chat: {
    name: 'Positive Chat',
    description: 'Someone said something nice in chat!',
  },

  voice_line_spam: {
    name: 'Voice Line Spam',
    description: 'Honor! justice! REINHARDT REINHARDT REINHARDT!',
  },

  found_trap: {
    name: 'Found the Trap',
    description: 'Walked into Junkrat\'s trap.',
  },

  stolen_healthpack: {
    name: 'Stolen Healthpack',
    description: 'Someone stole your Heathpack.',
  },

  // winloss
  draw: {
    name: 'Draw',
    description: 'Draw a match.',
  },

  win_streak_3: {
    name: 'Win Streak 3x',
    description: 'Win 3 games in a row.',
  },

  lose_streak_3: {
    name: 'Lose Streak 3x',
    description: 'Lose 3 games in a row. (Throwing does not count)',
  },

  ggez: {
    name: 'GGEZ',
    description: 'GGEZ in chat, or get one.',
  },

  // potg
  potg: {
    name: 'Get POTG',
    description: 'Get play of the game.',
  },

  potg_no_ult: {
    name: 'Get POTG without Ult',
    description: 'Get play of the game without using an ultimate.',
  },

  potg_combo: {
    name: 'Wombo Combo POTG',
    description: 'Play of the game was an ultimate combo.',
  },

  support_potg: {
    name: 'Support POTG',
    description: 'A support got play of the game.',
  },

  turret_potg: {
    name: 'Turret POTG',
    description: 'A turret got play of the game.',
  },

  dead_potg: {
    name: 'Dead in POTG',
    description: 'Someone died during or before their play of the game.',
  },

  spam_potg: {
    name: 'Spam POTG',
    description: 'Someone got play of the game by spamming potshots.',
  },

  // boop / environmental
  boop_1k: {
    name: 'Boop',
    description: 'Get an environmental kill',
  },

  boop_2k: {
    name: '2k Boop',
    description: 'Any boop netting at least 2 elims.',
  },

  boop_3k: {
    name: '3k Boop',
    description: 'Any boop netting at least 3 elims (Includes booping enemies into abilities).',
  },

  pinned_offmap: {
    name: 'Pinned off Map',
    description: 'Someone got pinned off the map by Reinhardt.',
  },

  // mistakes
  fall_off_map: {
    name: 'Off the Map',
    description: 'Someone accidentally fell off the map.',
  },

  tragic_ult: {
    name: 'Tragic Ult',
    description: 'An ultimate was used but got no value.',
  },

  panic_ult: {
    name: 'Panic Ult',
    description: 'Someone wasted an ultimate while panicking.',
  },

  ult_fest: {
    name: 'Ult Fest',
    description: 'Each team used 3 ultimates OR one team used at least 4 ultimates.',
  },

  stacking_ults: {
    name: 'Enough Ults',
    description: 'Using more ultimates than necessary, or stacking ultimates that do the same thing.',
  },

  // clutches
  ult_eaten: {
    name: 'Eatten Ult',
    description: 'An ultimate was eaten or deflected.',
  },

  eat_an_ult: {
    name: 'Eat an Ult',
    description: 'You must eat or deflect an ultimate.',
  },

  ult_shutdown: {
    name: 'Ult Shutdown',
    description: 'You must shutdown someones ultimate.',
  },

  ult_diff: {
    name: 'Ult Diff',
    description: 'An ultimate was shutdown by using another ultimate.',
  },

  solo_cap: {
    name: 'Solo Cap',
    description: 'The objective is captured by the last remaining player.',
  },

  c9: {
    name: 'C9',
    description: 'One team loses by forgetting to contest the objective.',
  },

  live_combo: {
    name: 'Lived Ult Combo',
    description: 'Someone lived an ultimate combo.',
  },

  no_deaths: {
    name: '0 Deaths',
    description: 'Win a game without dying.',
  },

  tripple_kill: {
    name: 'Tripple Kill',
    description: 'Get 3 elims in a row.',
  },

  quad_kill: {
    name: 'Quad kill',
    description: 'Get 4 elims in a row.',
  },

  support_tank_tripple: {
    name: 'Support or Tank 3k',
    description: 'A Tank or Support got 3 elims in one fight.',
  },

  fewest_deaths: {
    name: 'Fewest Deaths',
    description: 'Have the fewest deaths in the lobby.',
  },

  stall: {
    name: 'Huge Stall',
    description: 'Someone stalled the point for way longer than they should have.',
  },

  // leaver
  afk: {
    name: 'A.F.K.',
    description: 'Someone was removed from the game for inactivity.',
  },
  rage_quit: {
    name: 'Rage Quit',
    description: 'Someone left the game after an angry message.',
  },
  leaver_train: {
    name: 'Leaver Train',
    description: 'At least 3 people left the lobby.',
  },

  // any combos
  combo_1k: {
    name: 'Wombo Combo',
    description: 'Any ultimate combo netting at least 1 elim.',
  },

  combo_2k: {
    name: 'Wombo Combo 2k',
    description: 'Any ultimate combo netting at least 2 elims.',
  },

  combo_3k: {
    name: 'Wombo Combo 3k',
    description: 'Any ultimate combo netting at least 3 elims.',
  },

  combo_4k: {
    name: 'Wombo Combo 4k',
    description: 'Any ultimate combo netting at least 4 elims.',
  },

  // general combos
  grav_combo_1k: {
    name: 'Grav Combo',
    description: 'A Zarya\'s Graviton Surge used with any other ultimate netting at least 1 elim.',
  },

  flux_combo_1k: {
    name: 'Flux Combo',
    description: 'A Sigmas\'s Gravitic Flux used with any other ultimate netting at least 1 elim.',
  },

  nano_combo_1k: {
    name: 'Nano Combo',
    description: 'An Ana\'s Nano Boost used with any other ultimate netting at least 1 elim.',
  },

  bastion_combo_1k: {
    name: 'Bastion Combo',
    description: 'A Bastions\'s Artillery Strike used with any other ultimate netting at least 1 elim.',
  },

  blade_combo_1k: {
    name: 'Bastion Combo',
    description: 'A Genjis\'s Dragonblade used with any other ultimate netting at least 1 elim.',
  },

  window_combo_1k: {
    name: 'Window Combo',
    description: 'A baptiste\'s Window used with any other ultimate netting at least 1 elim.',
  },

  grav_combo_2k: {
    name: 'Grav Combo 2k',
    description: 'A Zarya\'s Graviton Surge used with any other ultimate netting at least 2 elims.',
  },

  // known combos
  grav_dragon_1k: {
    name: 'Grav Dragon',
    description: 'A Zarya\'s Graviton Surge used with Hanzo\'s Dragonstrike netting at least 1 elim.',
  },

  nano_visor_1k: {
    name: 'Nano Visor',
    description: 'An Ana\'s Nano Boost used with Soldier 76\'s Tactical Visor netting at least 1 elim.',
    rules: ['Must net at least 1 elim'],
  },

  nano_blade_1k: {
    name: 'Nano Blade',
    description: 'An Ana\'s Nano Boost used with Genjis\'s Dragonblade netting at least 1 elim.',
  },

  nano_valk_1k: {
    name: 'Nano Valk',
    description: 'An Ana\'s Nano Boost used with Mercy\'s Valkyrie netting at least 1 elim.',
  },

  nano_shatter_1k: {
    name: 'Nano Shatter',
    description: 'An Ana\'s Nano Boost used with Reinhardt\'s Earthshatter netting at least 1 elim.',
  },

  flux_noon_1k: {
    name: 'Flux Noon',
    description: 'A Sigmas\'s Gravitic Flux used with Cassidy\'s High Noon netting at least 1 elim.',
  },

  nano_rally_1k: {
    name: 'Nano Rally',
    description: 'An Ana\'s Nano Boost used with Brigette\'s Rally netting at least 1 elim.',
  },

  // support
  zen_gold_heals: {
    name: 'Zen Gold Heals',
    description: 'Zenyatta has more healing that anyone else on the team.',
  },

  dps_support: {
    name: 'DPS Support',
    description: 'A support has more damage OR elims than anyone else.',
  },

  dps_moria: {
    name: 'DPS Moria',
    description: 'A Moria has more damage than healing OR more damage than anyone else on the team.',
  },

  healer_76: {
    name: 'Healer 76',
    description: 'Any DPS or Tank outhealed a support.',
  },

  sleep_ult: {
    name: 'Sleep Ult',
    description: 'An ultimate ability was canceled with Ana\'s sleep dart.',
  },

  stolen_nano: {
    name: 'Stolen Nano',
    description: 'Someone stole nano by moving past the intented target.',
  },

  tragic_nano: {
    name: 'Tragic Nano',
    description: 'Nano Boost target died before reciving the effects or died beacuse of an Anti-Nade.',
  },

  awkward_transce: {
    name: 'Experience Awkwardness',
    description: 'Zenyatta used Transcendence too late to save someone OR to save himself.',
  },

  battle_mercy: {
    name: 'Battle Mercy',
    description: 'Mercy secured an elim with Valkyrie.',
  },

  pharmercy: {
    name: 'Pharah Mercy',
    description: 'A Pharah is hard pocketed by a Mercy.',
  },

  tragic_rez: {
    name: 'Tragic Rez',
    description: 'Mercy dies for a rez, breaks the rez, or the rezzed ally instantly dies.',
  },

  nano_support: {
    name: 'Nano Support',
    description: 'The other support secures an elim with Nano Boost.',
  },

  skill_orb: {
    name: 'Skill Orb',
    description: 'A Moria gets a kill with a random orb.',
  },

  mercy_fall: {
    name: 'Mercy Things',
    description: 'Mercy fell off the map, or someone saved mercy from falling off the map.',
  },

  girlbossed: {
    name: 'Girlboss',
    description: 'Mercy won a 1v1 without valk.',
  },

  die_thru_transce: {
    name: 'Die Through Transcendence',
    description: 'Someone died through Zenyatta\'s Transcendence.',
  },

  // tank
  huge_shatter: {
    name: 'Huge Shatter',
    description: 'Stunned 3+ enemies with Reinhardt\'s Earthshatter.',
    rules: ['Must net at least 1 elim'],
  },

  javelin_cancel: {
    name: 'Javelin Cancel',
    description: 'Someone canceled an ultimate with Orisa\'s Javelin Throw.',
  },

  javelin_boop: {
    name: 'Javelin Boop',
    description: 'Someone got an environmental kill with Orisa\'s Javelin Throw.',
  },

  sniper_monkey: {
    name: 'Sniper Monkey',
    description: 'A final blow with Winston\'s secondary fire.',
  },

  tank_carry: {
    name: 'Tank Carry',
    description: 'A Tank has more damage and elims than both DPS.',
  },

  remech_kill: {
    name: 'Remech Kill',
    description: 'Someone got killed by DVA\'s Remech.',
  },

  no_combo: {
    name: 'Tank 3k',
    description: 'A Tank got 3 elims with their ultimate without any help.',
  },

  bad_hook: {
    name: 'Hook 1.0',
    description: 'A hook that should have broken but didn\'t.',
  },

  sigma_9: {
    name: 'Sigma‑9',
    description: 'Sigma\'s Gravitic Flux prevents the enemy team from contesting.',
  },

  flux_canceled: {
    name: 'Flux Canceled',
    description: 'A sigma\'s Gravitic Flux was canceled.',
  },

  rein_charge_works: {
    name: 'Rein Charge Works',
    description: 'Reinhardt charges the frontline and it works.',
  },

  rein_charge_fail: {
    name: 'Failed Charge',
    description: 'Reinhardt dies before his charge ends.',
  },

  bubble_block_ult: {
    name: 'Bubble Block',
    description: 'An ultimate was blocked with Winston or Zarya\'s bubble ability.',
  },

  tank_experience:  {
    name: 'Tank Experience',
    description: 'Tank doesn\'t get to play the game (Infinite CC, Exploding, Low Healing).',
  },

  found_mines: {
    name: 'Found the Mines',
    description: 'Mines kill someone long after being placed.',
  },

  shatter_block: {
    name: 'Blocked Shatter',
    description: 'An earthshatter was blocked.',
  },

  solo_kill_tank: {
    name: 'Solo Kill Tank',
    description: 'Kill a tank in a 1v1 or without help from your team.',
  },

  yeprock: {
    name: 'YEP Rock!',
    description: 'Someone just found the biggest projectile in the game (Sigma\'s Rock).',
  },

  hog: {
    name: 'Hog',
    description: 'You got Roadhog in your game, unlucky.',
  },

  // dps
  negative_kdr: {
    name: 'Negative KDR',
    description: 'A DPS has a negative KDR at the end of a round or match.',
  },

  high_noon_potg: {
    name: 'High Noon POTG',
    description: 'Cassidy got POTG with High Noon.',
  },

  high_what: {
    name: 'It\'s High What?',
    description: 'Cassidy\'s ult was canceled.',
  },

  bastion_potg: {
    name: 'Bastion POTG',
    description: 'Bastion got play of the game with Artillery Strike.',
  },

  panic_swap: {
    name: 'Panic Swap',
    description: 'A team getting rolled swaps to Bastion, Junkrat, Mei, or Brig.',
  },

  bob_carry: {
    name: 'BOB Carry',
    description: 'BOB carries a fight by getting a least 3 elims or capturing the objective.',
  },

  tragic_bob: {
    name: 'Tragic BOB',
    description: 'BOB was sent off the map or is otherwise useless.',
  },

  mei_wall: {
    name: 'Mei Wall',
    description: 'Mei kills a teammate or ruins a play with her wall.',
  },

  sym_torb: {
    name: 'Turrets',
    description: 'Either team has Symmetra and Torbjorn.',
  },

  nice_blade: {
    name: 'Nice Blade',
    description: 'Genji nets no elims with Dragonblade.',
  },

  torb_hammer: {
    name: 'Hammer Kill',
    description: 'Someone got an elim with Torbjorn\'s Hammer.',
  },

  spawn_mei_wall: {
    name: 'Spawn Mei Wall',
    description: 'Allied Mei blocks spawn door with wall.',
  },

  spamzo: {
    name: 'Spamzo Crit',
    description: 'Someone got 1 shot by a random hanzo arrow.'
  },

  sniper_potg: {
    name: 'Sniper POTG',
    description: 'Someone got play of the game as a sniper.',
  },

  chain_hack: {
    name: 'Chain Hacked',
    description: 'Someone got hacked 3 times in a single fight.',
  },

  // center/free tile
  peel: {
    name: 'Peel',
    description: 'Turn around and help your backline (You have to actually do it).',
  },

  compliment: {
    name: 'Compliment Teammate',
    description: 'Just say someting positive (You have to actually do it).',
  },

  endorse: {
    name: 'Endorse',
    description: 'Endorse someone (You have to actually do it).',
  },

  flexqueue: {
    name: 'Flex Queue',
    description: 'Queue for Flex (You have to actually do it).',
  },

  toxic_chat: {
    name: 'Toxic Chat',
    description: 'Free Square.',
  },

  win: {
    name: 'Win',
    description: 'Free Square.',
  },

  lose: {
    name: 'Lose',
    description: 'Free Square.',
  },

  genjiotp: {
    name: 'Genji OTP',
    description: 'Free Square.',
  },

  hanzoopt: {
    name: 'Hanzo OTP',
    description: 'Free Square.',
  },

  hogotp: {
    name: 'Hog OTP',
    description: 'Free Square.',
  },

  mercyotp: {
    name: 'Mercy OTP',
    description: 'Free Square.',
  },

  echo: {
    name: 'Echo',
    description: 'Free Square.',
  },

  spamrat: {
    name: 'Spamrat',
    description: 'Free Square.',
  },
}
