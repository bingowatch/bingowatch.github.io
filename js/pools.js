const pools = {
  'ranked': [
    ['draw'],
  ],

  'unranked': [
    ['backfill'],
    ['qp_throw'],
  ],

  'common': [
    ['tank_deathmatch'],
    ['staggered'],
    ['afk', 'rage_quit'],
    ['pharmercy'],
    ['panic_swap'],
    ['spamzo'],
    ['rolled'],
    ['battle_mercy'],
    ['shatter_block'],
    ['me_diff', 'ggez'],
    ['no_ot'],
    ['skill_orb'],
    ['one_trick'],
    ['stall'],
    ['say_cheese'],
    ['c9'],
  ],

  'common_exclusive': [
    ['ult_fest'],
    ['nano_support'],
    ['boop_1k'],
    ['combo_1k', 'combo_2k'],
    ['tragic_ult'],
    ['win_streak_3', 'lose_streak_3'],
    ['eat_beam'],
    ['hog'],
    ['practice_10'],
    ['melee_final_blow'],
    ['streak_5', 'elims_25'],
  ],

  'normal': [
    ['ult_fest'],
    ['nano_support'],
    ['solo_ult'],
    ['solo_cap'],
    ['stacking_ults'],
    ['fewest_deaths'],
    ['huge_shatter'],
    ['awkward_transce'],
    ['sniper_monkey'],
    ['remech_kill'],
    ['tank_carry'],
    ['tank_experience', 'no_combo'],
    ['rein_charge_fail', 'rein_charge_works'],
    ['bubble_block_ult'],
    ['nice_blade', 'high_what'],
    ['meme_strat'],
    ['narnia'],
    ['tragic_ult', 'panic_ult'],
    ['solo_kill_tank'],
    ['flux_canceled'],
    ['yeprock'],
    ['bad_spawn'],
    ['instaqueue'],
    ['voice_line_spam'],
    ['found_trap'],
    ['mercy_fall'],
    ['team_kill'],
    ['girlbossed'],
    ['practice_5'],
    ['bob_carry', 'tragic_bob'],
  ],

  'normal_exclusive': [
    ['potg', 'potg_combo'],
    ['boop_2k'],
    ['ult_eaten', 'ult_shutdown'],
    ['tripple_kill'],
    ['combo_2k', 'combo_3k'],
    [
      'grav_combo_1k',
      'flux_combo_1k',
    ],
    [
      'nano_combo_1k',
      'bastion_combo_1k',
      'blade_combo_1k',
    ],
    ['dps_support'],
    ['sleep_ult'],
    ['mei_wall'],
    ['eat_beam', 'deflect_beam'],
    ['didnt_need_heals'],
    ['streak_10', 'elims_30'],
    ['no_deaths'],
    ['javelin_cancel'],
  ],

  'rare': [
    ['open_mic', 'empty_full_vc'],
    ['double_shield'],
    ['potg_no_ult', 'potg_combo', 'dead_potg'],
    [
      'turret_potg',
      'spam_potg',
    ],
    [
      'support_potg',
      'bastion_potg',
      'high_noon_potg',
      'sniper_potg',
    ],
    ['boop_3k'],
    ['pinned_offmap'],
    ['ult_eaten', 'ult_shutdown', 'eat_an_ult'],
    ['live_combo'],
    ['tripple_kill', 'quad_kill', 'support_tank_tripple'],
    ['leaver_train'],
    ['zen_gold_heals', 'dps_support', 'dps_moria'],
    ['sleep_ult', 'tragic_nano', 'stolen_nano'],
    ['tragic_rez'],
    ['bad_hook'],
    ['sigma_9'],
    ['negative_kdr'],
    ['mei_wall', 'spawn_mei_wall'],
    ['found_mines'],
    ['positive_chat', 'copium'],
    ['touch_spawn'],
    ['deflect_beam'],
    ['didnt_need_heals', 'get_healthpack'],
    ['bugs'],
    ['combo_3k', 'combo_4k'],
    [
      'grav_dragon_1k',
      'nano_visor_1k',
      'nano_blade_1k',
      'nano_valk_1k',
      'nano_shatter_1k',
      'flux_noon_1k',
      'nano_rally_1k',
    ],
    [
      'window_combo_1k',
      'bastion_combo_1k',
      'flux_combo_1k',
      'grav_combo_2k',
    ],
    ['stolen_healthpack'],
    ['chain_hack'],
    ['sym_torb'],
    ['torb_hammer'],
    ['javelin_cancel', 'javelin_boop'],
  ],

  'rare_exclusive': [
    ['streak_10', 'streak_15', 'elims_30', 'elims_35'],
  ],

  'impossible': [
    ['fall_off_map'],
    ['combo_4k'],
    ['healer_76'],
    ['combo_4k'],
    ['die_thru_transce'],
    ['streak_15', 'streak_20', 'elims_35', 'elims_40'],
  ],

  'free': [
    ['peel'],
    ['compliment'],
    ['endorse'],
    ['flexqueue'],
    ['win', 'lose', 'toxic_chat'],
    ['genjiotp', 'hanzoopt', 'spamrat', 'hogotp', 'mercyotp', 'echo'],
  ],
}

const difficulties = {
  'common': ['common', 'common_exclusive'],
  'normal': ['common', 'normal', 'normal_exclusive'],
  'rare': ['common', 'normal', 'rare', 'rare_exclusive'],
  'impossible': ['normal', 'rare', 'impossible'],
}

function mergePools(include) {
  let result = [];

  for (i of include) {
    if (!(i in pools)) continue;
    result = [...result, ..._.cloneDeep(pools[i])];
  };

  return result;
}

function getPool(difficulty, ranked=false) {
  let pools = _.cloneDeep(difficulties[difficulty]);
  pools.push(ranked? 'ranked':'unranked');
  return mergePools(pools);
}

function getFreeSquarePool() {
  return _.cloneDeep(pools['free']);
}

function selectRandom(arr, random = Math.random) {
  return arr.splice(arr.length * random() | 0, 1)[0];
}

function nextTile(pool, random) {
  return selectRandom(selectRandom(pool, random), random);
}

function getNFromPool(pool, n, random) {
  const result = [];
  for (var i = 0; i < n; i++) result.push(nextTile(pool, random));
  return result.filter(x=>x!==undefined);
}

function getSeededRandom(seed) {
  return new Math.seedrandom(seed);
}
