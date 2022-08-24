// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc4 = stdlib.T_Object({
    amount_raised: ctc0,
    owner: ctc1,
    project_desc: ctc2,
    project_name: ctc3,
    raise_amount: ctc0
    });
  return {
    notify: {
      send: [ctc4]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc4 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc0,
    project_desc: ctc2,
    project_name: ctc3,
    raise_amount: ctc1
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc4
    });
  const map0_ctc = ctc6;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc0, ctc4, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc6]);
  return {
    mapDataTy: ctc7
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc3, ctc1]);
  const ctc11 = stdlib.T_Data({
    raiser_addToFund0_62: ctc7,
    raiser_fetch0_62: ctc9,
    raiser_raiseFund0_62: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc6;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v434, time: v433, didSend: v23, from: v432 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v434, time: v433, didSend: v23, from: v432 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.notify(), {
    at: './index.rsh:41:20:application',
    fs: ['at ./index.rsh:41:20:application call to [unknown function] (defined at: ./index.rsh:41:20:function exp)', 'at ./index.rsh:41:20:application call to "liftedInteract" (defined at: ./index.rsh:41:20:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v432],
    evt_cnt: 0,
    funcNum: 1,
    lct: v433,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v438, time: v437, didSend: v32, from: v436 } = txn2;
      
      ;
      const v441 = '                                                                                                                                                                                                                                                                                        ';
      const v442 = '            ';
      const v443 = {
        amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        owner: v436,
        project_desc: v441,
        project_name: v442,
        raise_amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v450 = v437;
      const v457 = stdlib.checkedBigNumberify('./index.rsh:37:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v466 = stdlib.safeAdd(v450, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v432,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v438, time: v437, didSend: v32, from: v436 } = txn2;
  ;
  const v439 = stdlib.addressEq(v432, v436);
  stdlib.assert(v439, {
    at: './index.rsh:42:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v441 = '                                                                                                                                                                                                                                                                                        ';
  const v442 = '            ';
  const v443 = {
    amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    owner: v436,
    project_desc: v441,
    project_name: v442,
    raise_amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v450 = v437;
  let v457 = stdlib.checkedBigNumberify('./index.rsh:37:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v466 = stdlib.safeAdd(v450, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc11],
      timeoutAt: ['time', v466],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc13],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v801], secs: v803, time: v802, didSend: v400, from: v800 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v804 = true;
      await txn4.getOutput('randomFunc_informTimeout', 'v804', ctc12, v804);
      const cv450 = v802;
      const cv457 = v457;
      
      v450 = cv450;
      v457 = cv457;
      
      continue;
      }
    else {
      const {data: [v530], secs: v532, time: v531, didSend: v297, from: v529 } = txn3;
      switch (v530[0]) {
        case 'raiser_addToFund0_62': {
          const v533 = v530[1];
          undefined /* setApiDetails */;
          const v539 = v533[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '1')];
          const v547 = stdlib.safeAdd(v457, v539);
          ;
          const v549 = v533[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '0')];
          const v551 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v549), null);
          const v555 = stdlib.fromSome(v551, v443);
          const v556 = v555.amount_raised;
          const v558 = v555.owner;
          const v559 = v555.project_desc;
          const v560 = v555.project_name;
          const v561 = v555.raise_amount;
          const v562 = stdlib.safeAdd(v556, v539);
          const v563 = {
            amount_raised: v562,
            owner: v558,
            project_desc: v559,
            project_name: v560,
            raise_amount: v561
            };
          await stdlib.mapSet(map0, v549, v563);
          const v564 = null;
          await txn3.getOutput('raiser_addToFund', 'v564', ctc0, v564);
          const cv450 = v531;
          const cv457 = v547;
          
          v450 = cv450;
          v457 = cv457;
          
          continue;
          break;
          }
        case 'raiser_fetch0_62': {
          const v621 = v530[1];
          undefined /* setApiDetails */;
          ;
          const v663 = v621[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
          const v664 = {
            None: 0,
            Some: 1
            }[v663[0]];
          const v665 = stdlib.eq(v664, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v666 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v529), null);
          const v670 = stdlib.fromSome(v666, v443);
          const v671 = stdlib.fromSome(v663, v432);
          const v672 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v671), null);
          const v676 = stdlib.fromSome(v672, v443);
          const v677 = v665 ? v670 : v676;
          await txn3.getOutput('raiser_fetch', 'v677', ctc5, v677);
          const cv450 = v531;
          const cv457 = v457;
          
          v450 = cv450;
          v457 = cv457;
          
          continue;
          break;
          }
        case 'raiser_raiseFund0_62': {
          const v709 = v530[1];
          undefined /* setApiDetails */;
          ;
          const v781 = v709[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '0')];
          const v782 = v709[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '1')];
          const v783 = v709[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '2')];
          const v784 = {
            amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            owner: v529,
            project_desc: v782,
            project_name: v781,
            raise_amount: v783
            };
          await stdlib.mapSet(map0, v529, v784);
          null;
          const v786 = true;
          await txn3.getOutput('raiser_raiseFund', 'v786', ctc12, v786);
          const cv450 = v531;
          const cv457 = v457;
          
          v450 = cv450;
          v457 = cv457;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  return;
  
  
  
  
  };
export async function _raiser_addToFund4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _raiser_addToFund4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _raiser_addToFund4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc8 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc3, ctc1]);
  const ctc11 = stdlib.T_Data({
    raiser_addToFund0_62: ctc7,
    raiser_fetch0_62: ctc9,
    raiser_raiseFund0_62: ctc10
    });
  
  const map0_ctc = ctc6;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v432, v443, v457, v466] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc5, ctc1, ctc1]);
  const v491 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:83:14:application call to [unknown function] (defined at: ./index.rsh:83:14:function exp)', 'at ./index.rsh:53:38:application call to "runraiser_addToFund0_62" (defined at: ./index.rsh:81:9:function exp)', 'at ./index.rsh:53:38:application call to [unknown function] (defined at: ./index.rsh:53:38:function exp)'],
    msg: 'in',
    who: 'raiser_addToFund'
    });
  const v493 = v491[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v502 = ['raiser_addToFund0_62', v491];
  
  const txn1 = await (ctc.sendrecv({
    args: [v432, v443, v457, v466, v502],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v493, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v530], secs: v532, time: v531, didSend: v297, from: v529 } = txn1;
      
      switch (v530[0]) {
        case 'raiser_addToFund0_62': {
          const v533 = v530[1];
          sim_r.txns.push({
            kind: 'api',
            who: "raiser_addToFund"
            });
          const v539 = v533[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '1')];
          const v547 = stdlib.safeAdd(v457, v539);
          sim_r.txns.push({
            amt: v539,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v549 = v533[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '0')];
          const v551 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v549), null);
          const v555 = stdlib.fromSome(v551, v443);
          const v556 = v555.amount_raised;
          const v558 = v555.owner;
          const v559 = v555.project_desc;
          const v560 = v555.project_name;
          const v561 = v555.raise_amount;
          const v562 = stdlib.safeAdd(v556, v539);
          const v563 = {
            amount_raised: v562,
            owner: v558,
            project_desc: v559,
            project_name: v560,
            raise_amount: v561
            };
          await stdlib.simMapSet(sim_r, 0, v549, v563);
          const v564 = null;
          const v565 = await txn1.getOutput('raiser_addToFund', 'v564', ctc0, v564);
          
          const v1168 = v547;
          const v1169 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'raiser_fetch0_62': {
          const v621 = v530[1];
          
          break;
          }
        case 'raiser_raiseFund0_62': {
          const v709 = v530[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v530], secs: v532, time: v531, didSend: v297, from: v529 } = txn1;
  switch (v530[0]) {
    case 'raiser_addToFund0_62': {
      const v533 = v530[1];
      undefined /* setApiDetails */;
      const v539 = v533[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '1')];
      const v547 = stdlib.safeAdd(v457, v539);
      ;
      const v549 = v533[stdlib.checkedBigNumberify('./index.rsh:81:9:spread', stdlib.UInt_max, '0')];
      const v551 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v549), null);
      const v555 = stdlib.fromSome(v551, v443);
      const v556 = v555.amount_raised;
      const v558 = v555.owner;
      const v559 = v555.project_desc;
      const v560 = v555.project_name;
      const v561 = v555.raise_amount;
      const v562 = stdlib.safeAdd(v556, v539);
      const v563 = {
        amount_raised: v562,
        owner: v558,
        project_desc: v559,
        project_name: v560,
        raise_amount: v561
        };
      await stdlib.mapSet(map0, v549, v563);
      const v564 = null;
      const v565 = await txn1.getOutput('raiser_addToFund', 'v564', ctc0, v564);
      if (v297) {
        stdlib.protect(ctc0, await interact.out(v533, v565), {
          at: './index.rsh:82:7:application',
          fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:96:10:application call to "k" (defined at: ./index.rsh:87:22:function exp)', 'at ./index.rsh:87:22:application call to [unknown function] (defined at: ./index.rsh:87:22:function exp)'],
          msg: 'out',
          who: 'raiser_addToFund'
          });
        }
      else {
        }
      
      const v1168 = v547;
      const v1169 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
      return;
      
      break;
      }
    case 'raiser_fetch0_62': {
      const v621 = v530[1];
      return;
      break;
      }
    case 'raiser_raiseFund0_62': {
      const v709 = v530[1];
      return;
      break;
      }
    }
  
  
  };
export async function _raiser_fetch4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _raiser_fetch4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _raiser_fetch4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc4, ctc3, ctc1]);
  const ctc11 = stdlib.T_Data({
    raiser_addToFund0_62: ctc9,
    raiser_fetch0_62: ctc8,
    raiser_raiseFund0_62: ctc10
    });
  
  const map0_ctc = ctc6;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v432, v443, v457, v466] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc5, ctc1, ctc1]);
  const v506 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:102:11:application call to [unknown function] (defined at: ./index.rsh:102:11:function exp)', 'at ./index.rsh:53:38:application call to "runraiser_fetch0_62" (defined at: ./index.rsh:100:9:function exp)', 'at ./index.rsh:53:38:application call to [unknown function] (defined at: ./index.rsh:53:38:function exp)'],
    msg: 'in',
    who: 'raiser_fetch'
    });
  const v518 = ['raiser_fetch0_62', v506];
  
  const txn1 = await (ctc.sendrecv({
    args: [v432, v443, v457, v466, v518],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:105:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v530], secs: v532, time: v531, didSend: v297, from: v529 } = txn1;
      
      switch (v530[0]) {
        case 'raiser_addToFund0_62': {
          const v533 = v530[1];
          
          break;
          }
        case 'raiser_fetch0_62': {
          const v621 = v530[1];
          sim_r.txns.push({
            kind: 'api',
            who: "raiser_fetch"
            });
          ;
          const v663 = v621[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
          const v664 = {
            None: 0,
            Some: 1
            }[v663[0]];
          const v665 = stdlib.eq(v664, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v666 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v529), null);
          const v670 = stdlib.fromSome(v666, v443);
          const v671 = stdlib.fromSome(v663, v432);
          const v672 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v671), null);
          const v676 = stdlib.fromSome(v672, v443);
          const v677 = v665 ? v670 : v676;
          const v678 = await txn1.getOutput('raiser_fetch', 'v677', ctc5, v677);
          
          const v1180 = v457;
          const v1181 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
          sim_r.isHalt = false;
          
          break;
          }
        case 'raiser_raiseFund0_62': {
          const v709 = v530[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v530], secs: v532, time: v531, didSend: v297, from: v529 } = txn1;
  switch (v530[0]) {
    case 'raiser_addToFund0_62': {
      const v533 = v530[1];
      return;
      break;
      }
    case 'raiser_fetch0_62': {
      const v621 = v530[1];
      undefined /* setApiDetails */;
      ;
      const v663 = v621[stdlib.checkedBigNumberify('./index.rsh:100:9:spread', stdlib.UInt_max, '0')];
      const v664 = {
        None: 0,
        Some: 1
        }[v663[0]];
      const v665 = stdlib.eq(v664, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v666 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v529), null);
      const v670 = stdlib.fromSome(v666, v443);
      const v671 = stdlib.fromSome(v663, v432);
      const v672 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v671), null);
      const v676 = stdlib.fromSome(v672, v443);
      const v677 = v665 ? v670 : v676;
      const v678 = await txn1.getOutput('raiser_fetch', 'v677', ctc5, v677);
      if (v297) {
        stdlib.protect(ctc0, await interact.out(v621, v678), {
          at: './index.rsh:101:7:application',
          fs: ['at ./index.rsh:101:7:application call to [unknown function] (defined at: ./index.rsh:101:7:function exp)', 'at ./index.rsh:111:10:application call to "k" (defined at: ./index.rsh:106:17:function exp)', 'at ./index.rsh:106:17:application call to [unknown function] (defined at: ./index.rsh:106:17:function exp)'],
          msg: 'out',
          who: 'raiser_fetch'
          });
        }
      else {
        }
      
      const v1180 = v457;
      const v1181 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
      return;
      
      break;
      }
    case 'raiser_raiseFund0_62': {
      const v709 = v530[1];
      return;
      break;
      }
    }
  
  
  };
export async function _raiser_raiseFund4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _raiser_raiseFund4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _raiser_raiseFund4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc4, ctc3, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Data({
    raiser_addToFund0_62: ctc8,
    raiser_fetch0_62: ctc10,
    raiser_raiseFund0_62: ctc7
    });
  const ctc12 = stdlib.T_Bool;
  
  const map0_ctc = ctc6;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v432, v443, v457, v466] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc5, ctc1, ctc1]);
  const v468 = ctc.selfAddress();
  const v470 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:59:17:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)', 'at ./index.rsh:53:38:application call to "runraiser_raiseFund0_62" (defined at: ./index.rsh:57:9:function exp)', 'at ./index.rsh:53:38:application call to [unknown function] (defined at: ./index.rsh:53:38:function exp)'],
    msg: 'in',
    who: 'raiser_raiseFund'
    });
  const v478 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v468), null);
  const v479 = {
    None: 0,
    Some: 1
    }[v478[0]];
  const v480 = stdlib.eq(v479, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v480, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:17:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)', 'at ./index.rsh:59:17:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)', 'at ./index.rsh:53:38:application call to "runraiser_raiseFund0_62" (defined at: ./index.rsh:57:9:function exp)', 'at ./index.rsh:53:38:application call to [unknown function] (defined at: ./index.rsh:53:38:function exp)'],
    msg: 'This user already has a fund pending, can only create one',
    who: 'raiser_raiseFund'
    });
  const v487 = ['raiser_raiseFund0_62', v470];
  
  const txn1 = await (ctc.sendrecv({
    args: [v432, v443, v457, v466, v487],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v530], secs: v532, time: v531, didSend: v297, from: v529 } = txn1;
      
      switch (v530[0]) {
        case 'raiser_addToFund0_62': {
          const v533 = v530[1];
          
          break;
          }
        case 'raiser_fetch0_62': {
          const v621 = v530[1];
          
          break;
          }
        case 'raiser_raiseFund0_62': {
          const v709 = v530[1];
          sim_r.txns.push({
            kind: 'api',
            who: "raiser_raiseFund"
            });
          ;
          const v781 = v709[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '0')];
          const v782 = v709[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '1')];
          const v783 = v709[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '2')];
          const v784 = {
            amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            owner: v529,
            project_desc: v782,
            project_name: v781,
            raise_amount: v783
            };
          await stdlib.simMapSet(sim_r, 0, v529, v784);
          null;
          const v786 = true;
          const v787 = await txn1.getOutput('raiser_raiseFund', 'v786', ctc12, v786);
          
          const v1192 = v457;
          const v1193 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc1, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v530], secs: v532, time: v531, didSend: v297, from: v529 } = txn1;
  switch (v530[0]) {
    case 'raiser_addToFund0_62': {
      const v533 = v530[1];
      return;
      break;
      }
    case 'raiser_fetch0_62': {
      const v621 = v530[1];
      return;
      break;
      }
    case 'raiser_raiseFund0_62': {
      const v709 = v530[1];
      undefined /* setApiDetails */;
      ;
      const v781 = v709[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '0')];
      const v782 = v709[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '1')];
      const v783 = v709[stdlib.checkedBigNumberify('./index.rsh:57:9:spread', stdlib.UInt_max, '2')];
      const v784 = {
        amount_raised: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        owner: v529,
        project_desc: v782,
        project_name: v781,
        raise_amount: v783
        };
      await stdlib.mapSet(map0, v529, v784);
      null;
      const v786 = true;
      const v787 = await txn1.getOutput('raiser_raiseFund', 'v786', ctc12, v786);
      if (v297) {
        stdlib.protect(ctc0, await interact.out(v709, v787), {
          at: './index.rsh:58:7:application',
          fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:7:function exp)', 'at ./index.rsh:76:10:application call to "k" (defined at: ./index.rsh:66:33:function exp)', 'at ./index.rsh:66:33:application call to [unknown function] (defined at: ./index.rsh:66:33:function exp)'],
          msg: 'out',
          who: 'raiser_raiseFund'
          });
        }
      else {
        }
      
      const v1192 = v457;
      const v1193 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
      return;
      
      break;
      }
    }
  
  
  };
export async function _randomFunc_informTimeout4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _randomFunc_informTimeout4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _randomFunc_informTimeout4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '280'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc5 = stdlib.T_Object({
    amount_raised: ctc1,
    owner: ctc2,
    project_desc: ctc3,
    project_name: ctc4,
    raise_amount: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc6;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v432, v443, v457, v466] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc5, ctc1, ctc1]);
  const v799 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:117:7:application',
    fs: ['at ./index.rsh:117:7:application call to [unknown function] (defined at: ./index.rsh:117:7:function exp)', 'at ./index.rsh:116:41:application call to [unknown function] (defined at: ./index.rsh:116:41:function exp)'],
    msg: 'in',
    who: 'randomFunc_informTimeout'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v432, v443, v457, v466, v799],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:117:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v801], secs: v803, time: v802, didSend: v400, from: v800 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "randomFunc_informTimeout"
        });
      ;
      const v804 = true;
      const v805 = await txn1.getOutput('randomFunc_informTimeout', 'v804', ctc8, v804);
      
      const v1195 = v457;
      const v1196 = stdlib.safeAdd(v802, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc1, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v801], secs: v803, time: v802, didSend: v400, from: v800 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v804 = true;
  const v805 = await txn1.getOutput('randomFunc_informTimeout', 'v804', ctc8, v804);
  stdlib.protect(ctc0, await interact.out(v801, v805), {
    at: './index.rsh:117:7:application',
    fs: ['at ./index.rsh:117:7:application call to [unknown function] (defined at: ./index.rsh:117:7:function exp)', 'at ./index.rsh:118:8:application call to "k" (defined at: ./index.rsh:117:7:function exp)', 'at ./index.rsh:116:41:application call to [unknown function] (defined at: ./index.rsh:116:41:function exp)'],
    msg: 'out',
    who: 'randomFunc_informTimeout'
    });
  
  const v1195 = v457;
  const v1196 = stdlib.safeAdd(v802, stdlib.checkedBigNumberify('./index.rsh:10:18:decimal', stdlib.UInt_max, '2500'));
  return;
  
  
  
  };
export async function raiser_addToFund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for raiser_addToFund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for raiser_addToFund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _raiser_addToFund4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function raiser_fetch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for raiser_fetch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for raiser_fetch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _raiser_fetch4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function raiser_raiseFund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for raiser_raiseFund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for raiser_raiseFund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _raiser_raiseFund4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function randomFunc_informTimeout(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for randomFunc_informTimeout expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for randomFunc_informTimeout expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _randomFunc_informTimeout4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`raiser_addToFund(address,uint64)byte[0]`, `raiser_fetch((byte,byte[32]))(uint64,address,byte[280],byte[12],uint64)`, `raiser_raiseFund(byte[12],byte[280],uint64)byte`, `randomFunc_informTimeout()byte`],
    pure: [],
    sigs: [`raiser_addToFund(address,uint64)byte[0]`, `raiser_fetch((byte,byte[32]))(uint64,address,byte[280],byte[12],uint64)`, `raiser_raiseFund(byte[12],byte[280],uint64)byte`, `randomFunc_informTimeout()byte`]
    },
  appApproval: `BiARAAHUAggEIAyYAtUCl5mghA/yj//cD6ff5s0LA/wC9AICBSYFAQEBAAECAAEDIjUAMRhBBD8rZEkiWzUBJVs1AjEZIxJBACUxACEIr0sBKUsCVwB/ZksBKEsCV39/ZksBKksCV/5XZkhIQgPxNhoAF0lBAG0iNQQjNQZJIQkMQAA0SSEKDEAAFSEKEkQ2GgE1/yg0/1CBiwKvUEIAvyEJEkQ2GgE2GgJQNhoDUDX/KjT/UEIAp0khCwxAAAghCxJEK0IAPIGpybnNCBJENhoBNhoCUDX/KTT/UIGEAq9QQgB7NhoCFzUENhoDNhoBF0khDAxAAm5JIQQMQABfIQQSRCEENAESRDQESSISTDQCEhFEKWQoZFAqZFAnBGRQNQNJNQU1/4AE1OAYLTT/ULAyBjQDIQ1bD0SACQAAAAAAAAMkAbAoNQc0A1cAIDQDIQUkWDIGNAMhDltCAoBIIQQ0ARJENARJIhJMNAISEUQpZChkUCpkUCcEZFBJNQNJSVcAIDX/IQUkWDX+IQ5bNf1JNQU1/IAEwVokCDT8ULAyBjQDIQ1bDEQ0/CJVSSMMQAEXSSEPDEAAeyEPEkQ0/COBrAJYNfslrzEAUDT7IQYhB1hQNPtXAAxQNPuBpAIlWFA1+jEAMQCIAqsoNPpQNflINPlLASlLAlcAf2ZLAShLAld/f2ZLASpLAlf+V2ZISIAEXGkRhTT6ULCACQAAAAAAAAMSAbAoNQc0/zT+MgY0/UIBqUg0/FcBITX7NPs1+oAIAAAAAAAAAqU0/jT/NPpJNflXASA0+SJVTYgCN0k1+SMkWDT5IlVNNP4xAIgCJUk1+SMkWDT5IlVNNPoiVSMSTVCwNP40/zT6STX5VwEgNPkiVU2IAf1JNfkjJFg0+SJVTTT+MQCIAetJNfkjJFg0+SJVTTT6IlUjEk01BzT/NP4yBjT9QgEUSDT8VwEoNfs0+yEFWzX6NPqIAdQ0+1cAIDX5NP40+YgBqkk19yMkWDT3IlVNNfg0+UmIAZcoNPgiWzT6CBY0+FcIIFA0+IEoIQdYUDT4gcACIQZYUDT4gcwCJVhQUDX3SDT3SwEpSwJXAH9mSwEoSwJXf39mSwEqSwJX/ldmSEiACAAAAAAAAAI0sCs1BzT/NP4yBjT9NPoIQgB4SSMMQAA/IxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDNf+ABJqLkXSwNP8xABJENP8lrzEAUCEHr1AhBq9QJa9QMgYiQgAzSIGgjQaIAP8iNAESRDQESSISTDQCEhFEgARfDav6sDEAKUsBVwAgZ0gjNQEyBjUCQgBlNf81/jX9Nfw0/oHEEwg1+zT8NP1QNP8WUDT7FlApSwFXAH9nKEsBV39/ZypLAVf+f2cnBEsBgf0CgQdYZ0ghBDUBMgY1AkIAHDEZIRASRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhEDE1EkQiMTYSRCEMMTcSRCI1ASI1AkL/rUkxGGFAAAVIIQiviUkpYksBKGJQSwEqYlBMSIk0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 3,
  mapDataSize: 341,
  stateKeys: 4,
  stateSize: 388,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:123:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:53:38:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "raiser_addToFund": raiser_addToFund,
  "raiser_fetch": raiser_fetch,
  "raiser_raiseFund": raiser_raiseFund,
  "randomFunc_informTimeout": randomFunc_informTimeout
  };
export const _APIs = {
  raiser: {
    addToFund: raiser_addToFund,
    fetch: raiser_fetch,
    raiseFund: raiser_raiseFund
    },
  randomFunc: {
    informTimeout: randomFunc_informTimeout
    }
  };
