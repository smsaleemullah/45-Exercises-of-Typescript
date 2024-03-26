let guest_list = ['shehnaz', 'farah', 'mehnaz', 'kanwal'];
//for(let i=0; i<guest_list.length; i ++){
//    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
//}
let not_present = 'mehnaz';
let new_guest = 'khubi';
guest_list[2] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
}
guest_list.unshift('ilja', 'maria', 'aliza');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guests\nThank you\n');
}
export {};
