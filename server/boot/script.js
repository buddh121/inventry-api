// module.exports = function(server) {
//   var User = server.models.User;
//   var Role = server.models.Role;
//   var RoleMapping = server.models.RoleMapping;

//   var users = [
//     {email: 'sam@gmail.com', password: 'incorrect'}
//   ];

//   User.create(users, function(err, users) {
//       if (err) {return console.log(err);}

//       //create role
//       Role.create({
//         name: 'STOREMANAGER'
//       }, function(err, role) {
//         if (err) {console.log(err);}

//         role.principals.create({
//           principalType: RoleMapping.USER,
//           principalId: users[0].id
//         }, function(err, principal) {
//           console.log(err, principal);
//         });
//       });
//     });
// };