'use strict';

app.factory('Dashboard', function(FURL, $firebase, $q) {
	var ref = new Firebase(FURL);

	var Dashboard = {
		
		getTasksForUser: function(uid) {
			var defer = $q.defer();

			$firebase(ref.child('user_tasks').child(uid))
				.$asArray()
				.$loaded()
				.then(function(tasks) {					
					defer.resolve(tasks);
				}, function(err) {
					defer.reject();
				});

			return defer.promise;
		},
/* // Attempting to get photos through fb api: other part in dashboard.html partial
		getPhotosForUser: function() {
			FB.api(
			    "/1498701713/photos",
			    function (response) {
			      if (response && !response.error) {
			        return response;
			      }
			    }
			);
		}
		*/
	};

	return Dashboard;
});