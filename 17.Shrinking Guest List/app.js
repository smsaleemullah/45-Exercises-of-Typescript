let guest_list = ['shehnaz', 'farah', 'mehnaz', 'kanwal'];
//for(let i=0; i<guest_list.length; i ++){
//    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
//}
let not_present = 'mehnaz';
let new_guest = 'khubi';
guest_list[2] = new_guest;
//for(let i=0; i<guest_list.length; i ++){
//    console.log('Respected Madam ' + guest_list[i] +',\nWe invited you on dinner tomorrow.\nThank You\n')
//}
guest_list.unshift('ilja', 'maria', 'aliza');
//for(let i=0; i<guest_list.length; i ++){
//    console.log('Respected Madam ' + guest_list[i] +',\nWe invited you on dinner tomorrow. We found big table so we decide to invite 3 more guests.\nThank You\n')
//}
console.log('\nUnfortunatly we can not arrange big table , only two people allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry madam .${remove_guest} you are not invited for dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Madam ' + guest_list[i] + '\nYes you are still invited for dinner tomorrow\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
export {};
