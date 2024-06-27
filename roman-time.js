 /* eslint-disable linebreak-style */
 'use strict';
 // eslint-disable-next-line linebreak-style

 /**
  * @param {String} time – время в формате HH:MM (например, 09:05)
  * @returns {String} – время римскими цифрами (IX:V)
  */
 function romanTime(time) {

     let roman = {
         L: 50,
         XL: 40,
         X: 10,
         IX: 9,
         V: 5,
         IV: 4,
         I: 1
     };

     let [hours, minutes] = time.split(':');

     hours = Number(hours);

     minutes = Number(minutes);

     const romanHours = [];

     const romanMinutes = [];

     let a;

     if (hours >= 24 || hours < 0 || typeof hours !== 'number') {

         throw new TypeError('Некорректный часовой формат');

     }
     if (minutes >= 60 || minutes < 0 || typeof minutes !== 'number') {

         throw new TypeError('Некорректный часовой формат');

     }

     if (hours === 0) {

         romanHours.push('N');

     }

     if (minutes === 0) {

         romanMinutes.push('N');

     }

     while (hours > 0) {

         for (a in roman) {

             if (roman[a] <= hours) {

                 romanHours.push(a);
                 hours -= roman[a];
                 break;

             }
         }
     }


     while (minutes > 0) {

         for (a in roman) {

             if (roman[a] <= minutes) {

                 romanMinutes.push(a);
                 minutes -= roman[a];
                 break;
             }
         }
     }


     return romanHours.join('') + ':' + romanMinutes.join('');
 }

 module.exports = romanTime;
