app.controller('Page1Ctrl', function($scope, $state, formData) {
  $scope.user = {};
 $scope.submitForm = function(user) {
   if (user.firstName!=null && user.lastName!=null && user.comments!=null) {
     console.log("Submitting Form", user);
     formData.updateForm(user);
   console.log("Retrieving form from service", formData.getForm());
 
   $state.go('page2');
   } else {
     alert("Please fill out some information for the user");
   }
 };
})

