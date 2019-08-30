(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b11383e"],{"57c8":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("HeaderEFTG",{ref:"headerEFTG",on:{login:t.onLogin,logout:t.onLogout}}),s("div",{staticClass:"container"},[s("h2",[t._v("Proposals")]),t.steemdao.name?s("div",[t._v("Total fund: "+t._s(t.steemdao.sbd_balance))]):t._e(),t.steemdao.name?s("div",[t._v("Daily budget: "+t._s(t.steemdao.daily_budget))]):t._e(),t.steemdao.name?s("div",[t._v("Budget for the next hour: "+t._s(t.steemdao.hourly_budget))]):t._e(),s("div",{staticClass:"row mb-3"},[s("div",{staticClass:"col-12 text-right"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.sort_order,expression:"sort_order"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.sort_order=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"votes"}},[t._v("Sort by votes")]),s("option",{attrs:{value:"start_date"}},[t._v("Sort by start date")]),s("option",{attrs:{value:"end_date"}},[t._v("Sort by end date")]),s("option",{attrs:{value:"total_days"}},[t._v("Sort by total days")]),s("option",{attrs:{value:"id"}},[t._v("Sort by id")]),s("option",{attrs:{value:"status"}},[t._v("Sort by status")]),s("option",{attrs:{value:"creator"}},[t._v("Sort by creator")]),s("option",{attrs:{value:"receiver"}},[t._v("Sort by receiver")]),s("option",{attrs:{value:"daily_pay"}},[t._v("Sort by daily pay")]),s("option",{attrs:{value:"total_pay"}},[t._v("Sort by total pay")])])])]),s("div",{staticClass:"card mb-2"},[s("ul",{staticClass:"list-group list-group-flush"},t._l(t.proposals,function(e,a){return s("li",{key:a,staticClass:"list-group-item",on:{click:function(e){return t.selectProposal(a)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[s("div",{staticClass:"image-profile mr-2",style:{backgroundImage:"url("+e.image+")"}}),s("span",[t._v(t._s(e.creator)+" "),e.creator!==e.receiver?s("span",[t._v("(receiver @"+t._s(e.receiver)+")")]):t._e()]),s("div",[s("router-link",{attrs:{to:e.url}},[t._v(t._s(e.subject))])],1),s("div",[s("small",[t._v("id #"+t._s(e.id))]),s("span",{staticClass:"badge ml-2",class:{"badge-primary":e.active,"badge-warning":!e.active}},[t._v(t._s(e.status))])])]),s("div",{staticClass:"col-4"},[t._v("From "+t._s(e.start_date)+" to "+t._s(e.end_date)+" ("+t._s(e.total_time)+")")]),s("div",{staticClass:"col-2"},[t._v(t._s(e.daily_pay)+" daily")]),s("div",{staticClass:"col-2"},[t._v(t._s(e.votes_sp))]),s("div",{staticClass:"col-1"},[s("button",{staticClass:"btn",class:{"btn-primary":e.newVote,"btn-secondary":!e.newVote},on:{click:function(e){return t.toggleVote(a)}}},[s("font-awesome-icon",{attrs:{icon:"check"}})],1)])])])}),0)]),this.$store.state.auth.logged?s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"form-group col-12"},[s("button",{staticClass:"btn btn-primary btn-large mr-2",attrs:{disabled:t.saving},on:{click:t.save}},[t.saving?s("div",{staticClass:"mini loader"}):t._e(),t._v("Save")]),s("button",{staticClass:"btn btn-secondary btn-large",on:{click:t.reset}},[t._v("Reset")])])]):t._e(),t.alert.info?s("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[t._v(t._s(t.alert.infoText))]):t._e(),t.alert.success?s("div",{staticClass:"alert alert-success",attrs:{role:"alert"},domProps:{innerHTML:t._s(t.alert.successText)}}):t._e(),t.alert.danger?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.alert.dangerText))]):t._e()])],1)},o=[],r=(s("20d6"),s("ac6a"),s("55dd"),s("96cf"),s("3b8d")),n=s("1429"),i=s("2b53"),l=s("766b"),c=s("9944"),d=s("41cb"),u=s("db49"),p=s("4d78"),v={name:"ProposalsPage",data:function(){return{proposals:[],sort_order:"votes",steemdao:{},saving:!1}},components:{HeaderEFTG:n["a"]},mixins:[p["a"],i["a"],l["a"]],created:function(){var t=this;this.getChainProperties().then(function(){t.getProposals()})},watch:{sort_order:function(t){this.sortBy(t)}},methods:{getSteemDao:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.steem_database_call("get_accounts",[["steem.dao"]]);case 3:e=t.sent,this.steemdao=e[0],this.steemdao.daily_budget=(parseFloat(this.steemdao.sbd_balance)/100).toFixed(3)+" "+u["a"].SBD,this.steemdao.hourly_budget=(parseFloat(this.steemdao.sbd_balance)/2400).toFixed(3)+" "+u["a"].SBD,t.next=13;break;case 9:throw t.prev=9,t.t0=t["catch"](0),this.showDanger("Problems loading steem.dao"),t.t0;case 13:case"end":return t.stop()}},t,this,[[0,9]])}));function e(){return t.apply(this,arguments)}return e}(),getProposals:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("get"),this.proposals=[],t.next=4,this.getSteemDao();case 4:return t.next=6,this.steem_database_call("list_proposals",[["",0],100,"by_creator"]);case 6:for(s in e=t.sent,e)a=e[s],o=new Date(a.end_date)-new Date(a.start_date),a.url=u["a"].EXPLORER+"@"+a.creator+"/"+a.permlink,a.image="https://steemitimages.com/u/"+a.creator+"/avatar/small",a.votes_sp=(parseInt(a.total_votes)/1e12*this.chain.steem_per_mvests).toFixed(3)+" "+u["a"].SP,a.vote=!1,a.newVote=!1,a.total_time=c["a"].textTime(o),a.total_pay=(parseFloat(a.daily_pay)*o/864e5).toFixed(3)+" "+u["a"].SBD,a.active=this.isActive(a),a.status=a.active?"active":"inactive",this.proposals.push(a);this.sortBy(this.sort_order),this.$store.state.auth.logged&&this.loadVotesFromAccount(),this.loadVotesNoActive();case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),sortBy:function(t){var e=this;switch(t){case"votes":return void this.proposals.sort(function(t,e){return parseInt(e.total_votes)-parseInt(t.total_votes)});case"start_date":return void this.proposals.sort(function(t,e){return new Date(t.start_date)-new Date(e.start_date)});case"end_date":return void this.proposals.sort(function(t,e){return new Date(t.end_date)-new Date(e.end_date)});case"total_days":return void this.proposals.sort(function(t,e){return new Date(e.end_date)-new Date(e.start_date)-(new Date(t.end_date)-new Date(t.start_date))});case"creator":return void this.proposals.sort(function(t,e){return t.creator.localeCompare(e.creator)});case"receiver":return void this.proposals.sort(function(t,e){return t.receiver.localeCompare(e.receiver)});case"daily_pay":return void this.proposals.sort(function(t,e){return parseFloat(e.daily_pay)-parseFloat(t.daily_pay)});case"total_pay":return void this.proposals.sort(function(t,e){return(new Date(e.end_date)-new Date(e.start_date))*parseFloat(e.daily_pay)-(new Date(t.end_date)-new Date(t.start_date))*parseFloat(t.daily_pay)});case"status":return void this.proposals.sort(function(t,s){var a=e.isActive(t),o=e.isActive(s);return a==o?parseInt(s.total_votes)-parseInt(t.total_votes):a&&!o?-1:!a&&o?1:void 0});case"id":return void this.proposals.sort(function(t,e){return parseInt(t.id)-parseInt(e.id)});default:throw new Error("The type '".concat(t,"' for sort does not exists"))}},isActive:function(t){var e=Date.now();return e<=new Date(t.end_date+"Z")&&e>=new Date(t.start_date+"Z")},loadVotesNoActive:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s,a,o,r,n,i,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:t.t0=regeneratorRuntime.keys(this.proposals);case 1:if((t.t1=t.t0()).done){t.next=43;break}if(e=t.t1.value,s=this.proposals[e],!this.isActive(s)){t.next=6;break}return t.abrupt("continue",1);case 6:s.total_votes=0,a="",o=!1,r=[];case 10:if(o){t.next=32;break}return t.next=13,this.steem_database_call("list_proposal_votes",[[s.id,a],100,"by_proposal_voter"]);case 13:if(n=t.sent,n.length>0&&console.log("Votes: length: ".concat(n.length,". from '").concat(n[0].voter,"' to '").concat(n[n.length-1].voter,"'")),1!=n.length){t.next=20;break}o=!0,n[0].proposal.id==s.id&&r.push(n[0].voter),t.next=29;break;case 20:i=0;case 21:if(!(i<n.length-1)){t.next=29;break}if(n[i].proposal.id===s.id){t.next=25;break}return o=!0,t.abrupt("break",29);case 25:r.push(n[i].voter);case 26:i++,t.next=21;break;case 29:a=n[n.length-1].voter,t.next=10;break;case 32:return console.log("voters of id ".concat(s.id)),console.log(r),t.next=36,this.steem_database_call("get_accounts",[r]);case 36:for(i in l=t.sent,l)s.total_votes+=parseInt(this.witness_vote_weight(l[i]));console.log("total votes ".concat(s.total_votes)),s.votes_sp=(parseInt(s.total_votes)/1e12*this.chain.steem_per_mvests).toFixed(3)+" "+u["a"].SP,this.$set(this.proposals,e,s),t.next=1;break;case 43:this.sortBy(this.sort_order);case 44:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),witness_vote_weight:function(t){var e=Math.floor(1e6*parseFloat(t.vesting_shares));for(var s in t.proxied_vsf_votes)e+=parseInt(t.proxied_vsf_votes[s]);return e},loadVotesFromAccount:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s,a,o,r,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.auth.user,this.clearVotes(),t.next=4,this.steem_database_call("list_proposal_votes",[[e,0],100,"by_voter_proposal"]);case 4:s=t.sent,a=[],t.t0=regeneratorRuntime.keys(s);case 7:if((t.t1=t.t0()).done){t.next=16;break}if(o=t.t1.value,r=s[o],r.voter===e){t.next=12;break}return t.abrupt("break",16);case 12:n=this.proposals.findIndex(function(t){return t.id===r.proposal.id}),n>=0?(i=this.proposals[n],i.vote=!0,i.newVote=!0,this.$set(this.proposals,n,i)):a.push(r),t.next=7;break;case 16:a.length>0&&(console.log("TODO: these proposals are already voted but they are not in the TOP list:"),console.log(a));case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selectProposal:function(t){var e=this.proposals[t];d["a"].push({name:"Proposal",params:{id:e.id}})},toggleVote:function(t){var e=this.proposals[t];e.newVote=!e.newVote,this.$set(this.proposals,t,e)},save:function(){var t=this.$store.state.auth.user,e=this.$store.state.auth.keys.active,s=this.$store.state.auth.keys.owner,a=null;if(null!=e)a=e;else{if(null==s)return void this.showDanger("Please login with master, owner, or active key");a=s}var o=this.proposals.slice(),r=[],n=[];for(var i in o){var l=o[i];l.newVote!=l.vote&&(!0===l.newVote?r.push(l.id):n.push(l.id))}if(0!=r.length||0!=n.length){var c=[];r.sort(function(t,e){return t-e}),n.sort(function(t,e){return t-e});var d=0;for(i=0;i<r.length;i++)d%u["a"].STEEM_PROPOSAL_MAX_IDS_NUMBER==0&&c.push(["update_proposal_votes",{voter:t,proposal_ids:[],approve:!0,extensions:[]}]),c[c.length-1][1].proposal_ids.push(r[i]),d++;for(d=0,i=0;i<n.length;i++)d%u["a"].STEEM_PROPOSAL_MAX_IDS_NUMBER==0&&c.push(["update_proposal_votes",{voter:t,proposal_ids:[],approve:!1,extensions:[]}]),c[c.length-1][1].proposal_ids.push(n[i]),d++;this.saving=!0,this.hideSuccess(),this.hideDanger(),this.hideInfo();var p=this;this.steem_broadcast_sendOperations(c,a).then(function(t){p.saving=!1,p.showSuccess('<a href="'.concat(u["a"].EXPLORER2,"b/").concat(t.block_num,"/").concat(t.id,'" class="alert-link" target="_blank">Votes saved!</a>')),p.loadVotesFromAccount()}).catch(function(t){throw p.saving=!1,p.showDanger(t.message),console.log("operations"),console.log(c),t})}else this.showDanger("Nothing to change")},reset:function(){for(var t in this.proposals){var e=this.proposals[t];e.newVote=JSON.parse(JSON.stringify(e.vote)),this.$set(this.proposals,t,e)}this.hideSuccess(),this.hideDanger(),this.hideInfo()},clearVotes:function(){for(var t in this.proposals){var e=this.proposals[t];e.vote=!1,this.$set(this.proposals,t,e)}},onLogin:function(){this.loadVotesFromAccount(),this.hideSuccess(),this.hideDanger(),this.hideInfo()},onLogout:function(){this.clearVotes(),this.hideSuccess(),this.hideDanger(),this.hideInfo()}}},h=v,_=(s("6112"),s("2877")),g=Object(_["a"])(h,a,o,!1,null,"c8e5d43c",null);e["default"]=g.exports},6112:function(t,e,s){"use strict";var a=s("d90c"),o=s.n(a);o.a},d90c:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0b11383e.ad0d7e89.js.map