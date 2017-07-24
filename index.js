( function()
{
    angular.module("manager",['ngRoute']);

/*



    var genService = function(){
        return [
            {
                student: {
                    grade: "B - 85%"
                },
                teacher:{
                    grade: "A - 93%"
                },
                assignments: [
                    {
                        title: "Design Login",
                        indicator: "D",
                        due: "1",
                        color: "",
                        description: "One of the most common ways to design a Web page is by using a CSS template. A WordPress theme is a common type of CSS template; other CSS templates can be used for all sorts of Web pages (not just WordPress sites). Scores of sites offer thousands of free CSS templates for you to copy, edit and use as your own; most of them are licensed with some form of Creative Commons license that you must respect. CSS Template is a good pair of search keywords, as is WordPress Theme.",
                        group: ["JB", "MH", "RA", "+4"],
                        g: true,
                        grade: "95",
                        pcomplete: "100%",
                        question: [
                            {
                                q: "How are you doing today professor?",
                                student: "student",
                                prof: ""
                            }
                        ]
                    },
                    {
                        title: "Code Login",
                        indicator: "D",
                        due: "3",
                        color: "",
                        description: "The link to each of the following problems is located on the Moodle course page. On each web page, there is a link to a diagram showing the data layout for each database. Open each document and print. For each problem, identify the obvious entities in each structure, create the conceptual schema and normalize to create a relational database structure. Construct each conceptual schema using the program, Visio. Use the online tutorial (link is on the syllabus) about Visio to learn to create the conceptual schema.",
                        group: ["CT", "UV", "JS"],
                        g: true,
                        grade: "88",
                        pcomplete: "85.7%"
                    },
                    {
                        title: "Home Page",
                        indicator: "P",
                        due: "5",
                        color: "",
                        description: "Homepages are kind of like digital welcome signs that greet people when they visit your site. Having a beautiful design isn’t enough – if you want to keep visitors glued to your website, you need to have a homepage that functions as an uninterrupted environment for them. Here are the basic elements for creating a homepage that draws visitors in deeper.",
                        group: ["CT", "UV", "JS"],
                        g: true,
                        grade: "85",
                        pcomplete: "10.7%"
                    },
                    {
                        title: "Logout Page",
                        indicator: "P",
                        due: "7",
                        color: "yellow",
                        description: "We now have a login page. We're processing login attempts. …We're marking admins as being logged in and we're confirming that admins have …that mark stored in the session before we give them back protected pages. …There's just one last thing that we need to take care of which is allowing admins …to log out. To do that we're going to create a new page. …Instead of login.php it's going to be logout.php. …I'm just going to go to Text Mate and open a brand new page with nothing in it.",
                        group: ["AS", "DF", "GH", "+4"],
                        g: true,
                        grade: "93",
                        pcomplete: "89.3%"
                    },
                    {
                        title: "Node Server",
                        indicator: "P",
                        due: "9",
                        color: "red",
                        description: "Within a vast computer network, the individual computers on the periphery of the network, those that do not also connect other networks, and those that often connect transiently to one or more clouds are called end nodes. Typically, within the cloud computing construct, the individual user / customer computer that connects into one well-managed cloud is called an end node. Since these computers are a part of the network yet unmanaged by the cloud's host, they present significant risks to the entire cloud.",
                        group: ["YT", "RE", "WI", "+1"],
                        g: false,
                        submit: true,
                        pcomplete: "35.7%"
                    },
                    {
                        title: "Express Lib",
                        indicator: "P",
                        due: "11",
                        color: "yellow",
                        description: "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It is the de facto standard server framework for Node.js. It is relatively minimal with many features available as plugins. Express is the backend part of the MEAN stack, together with MongoDB database and AngularJS frontend framework.",
                        group: ["SA", "DS", "FD", "+3"],
                        g: false,
                        submit: true,
                        pcomplete: "82.3%"
                    },
                    {
                        title: "MongoJS",
                        indicator: "I",
                        due: "15",
                        color: "red",
                        description: "MongoDB (from humongous) is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas. MongoDB is developed by MongoDB Inc. and is free and open-source, published under a combination of the GNU Affero General Public License and the Apache License.",
                        group: ["CT", "DF", "RE", "+2"],
                        g: false,
                        submit: false,
                        pcomplete: "96.4%"
                    },
                    {
                        title: "Profile Page",
                        indicator: "I",
                        due: "15",
                        color: "red",
                        description: "In this tutorial I want to demonstrate how we can build a minimal user profile layout design. This is mostly centered around a small set of navigation links, which dynamically change the display between bits of content. Depending on the purpose of your website, these content sections may be split to include photos, videos, followers, and other related information. To get an idea of what we’re building take a peek at my live sample demo.",
                        group: ["SA", "WI", "GH", "+1"],
                        g: false,
                        submit: false,
                        pcomplete: "90.3%"
                    },
                    {
                        title: "Form Valid",
                        indicator: "I",
                        due: "15",
                        color: "red",
                        description: "Syntax – the form – is contrasted with semantics – the meaning. In processing computer languages, semantic processing generally comes after syntactic processing, but in some cases semantic processing is necessary for complete syntactic analysis, and these are done together or concurrently. In a compiler, the syntactic analysis comprises the frontend, while semantic analysis comprises the backend (and middle end, if this phase is distinguished).",
                        group: ["JS", "UV", "CT", "+1"],
                        g: false,
                        submit: false,
                        pcomplete: "20%"
                    },
                    {
                        title: "Encrypt",
                        indicator: "I",
                        due: "15",
                        color: "red",
                        description: "In cryptography, encryption is the process of encoding messages or information in such a way that only authorized parties can access it. Encryption does not of itself prevent interference, but denies the intelligible content to a would-be interceptor. In an encryption scheme, the intended information or message, referred to as plaintext, is encrypted using an encryption algorithm, generating ciphertext that can only be read if decrypted. For technical reasons, an encryption scheme usually uses a pseudo-random encryption key generated by an algorithm. It is in principle possible to decrypt the message without possessing the key, but, for a well-designed encryption scheme, large computational resources and skill are required. An authorized recipient can easily decrypt the message with the key provided by the originator to recipients but not to unauthorized users.",
                        group: ["RA", "MH", "YT", "+1"],
                        g: false,
                        submit: false,
                        pcomplete: "10%"
                    }
                ],
                users: [
                    {
                        name: "Josh Boldt",
                        bio: "My opinions may have changed, but not the fact that I’m right. I’m not crazy, my reality is just different than yours. I always learn from mistakes of others who take my advice",
                        initial: "JB",
                        tasks: ["Design Login", "Code Login", "Encrypt"]
                    },
                    {
                        name: "Morgan Hites",
                        bio: "Don’t follow me because I don’t even know where I’m going. At last I graduated…….Now thermometer is not the only thing in the world having degrees without brains. Recommended by 4 out of 5 people that recommend things.",
                        initial: "MH",
                        tasks: ["Design Login", "Encrypt", "Express Lib", "MongoJS"]
                    },
                    {
                        name: "Ryland Atkins",
                        bio: "Contributing To Entropy Since 1992. Everyone on this earth is self-centered, the difference is the radius.",
                        initial: "RA",
                        tasks: ["Design Login", "Code Login", "Home Page", "Encrypt"]
                    },
                    {
                        name: "Joe Blake",
                        bio: "People of my age are busy with Relation, break up, heart break, patch ups and I am still figuring out a way to wake up before 10 am. I am so poor,i cant even pay attention. The best of me is yet to come. There are two kinds of people in this world… And I don´t like them",
                        initial: "JB",
                        tasks: ["Encrypt", "Code Login", "Home Page", "Express Lib"]
                    },
                    {
                        name: "Jamie Sam",
                        bio: "Professional procrastinator. Analogue at birth, digital by design",
                        initial: "JS",
                        tasks: ["Design Login", "Encrypt", "Express Lib", "MongoJS"]
                    },
                    {
                        name: "Catherine Tuttery",
                        bio: "Camping is intents. Chocolate doesn’t ask questions, chocolate understands. Coffee-Drinker, eReader Addict, Blogger. I’m very busy and awesome",
                        initial: "CT",
                        tasks: ["Design Login", "Code Login", "Encrypt"]
                    },
                    {
                        name: "Ursella Vladas",
                        bio: "Perfect has 7 letters and so does meeeeee. Coincidence? I think not. Please insert pretentious crap about myself here.",
                        initial: "UV",
                        tasks: ["Design Login", "Code Login", "Encrypt", "MongoJS"]
                    },
                    {
                        name: "Ashish Safandi",
                        bio: "My relationship status? Netflix, Oreos and sweatpants. Naturally and artificially flavored. Nice guys finish lunch.",
                        initial: "AS",
                        tasks: ["Design Login", "Code Login", "MongoJS"]
                    },
                    {
                        name: "Derkon Flopot",
                        bio: "My hobbies are breakfast, lunch, and dinner. My life is about as organized as the $5 DVD bin at Wal-Mart. My life was changed by a train.",
                        initial: "DF",
                        tasks: ["Design Login", "Code Login", "Home Page"]
                    },
                    {
                        name: "Gogh Hamlet",
                        bio: "Living vicariously through myself. Making the Snuggie look good since 2009. Mama said life is like a box of chocolates, you never know what your gonna get",
                        initial: "GH",
                        tasks: ["Design Login", "Code Login", "Form Valid", "Express Lib"]
                    },
                    {
                        name: "Savannah Atkinson",
                        bio: "I put the hot in psychotic. I recently gave up Warcraft so my productivity, and drinking, have increased dramatically.",
                        initial: "SA",
                        tasks: ["Design Login", "Form Valid"]
                    },
                    {
                        name: "Doplilia Servius",
                        bio: "I hope one day I love something the way women in commercials love yogurt. I looked at my Instagram photos and realized I look beautiful. I once sneezed a beanie weenie through my nose. I also made a horse faint in Costa Rica. I only rap caucasionally. I prefer my puns intended",
                        initial: "DS",
                        tasks: ["Form Valid", "Code Login", "MongoJS"]
                    },
                    {
                        name: "Ford Doofilius",
                        bio: "I am coming back to face the reality that a normal day is not beer on the beach or calamari in the belly. I can quote (Insert movie) better than you and all your friends. I Can’t remember who I stole my bio from or why. I have not lost my mind – it’s backed up on HD somewhere.",
                        initial: "FD",
                        tasks: ["Design Login", "Code Login", "MongoJS"]
                    },
                    {
                        name: "Rememma Etea",
                        bio: "Have lots of hair and like ugly things. Here to serve…. the cat overlord. I always feel sad for seedless watermelons, because what if they wanted babies?",
                        initial: "RE",
                        tasks: ["Design Login", "Code Login", "Home Page", "Form Valid"]
                    },
                    {
                        name: "Yolandi Tevessa",
                        bio: "enerally, the path of least resistance appeals. Also, I am excellent at parallel parking. God bless this hot mess. Good Samaritan, washed-up athlete, especially gifted napper.",
                        initial: "YT",
                        tasks: ["Design Login", "Code Login"]
                    },
                    {
                        name: "Wiley Ioti",
                        bio: "Eating a whole apple core because you can’t be bothered going to the bin, admit it, you’ve done it. Every storm runs out of rain. Fabulous ends in “us” coincidence? I think not",
                        initial: "WI",
                        tasks: ["Home Page", "Design Login", "Code Login", "Form Valid", "Express Lib", "MongoJS"]
                    }
                ]
            }
        ];

    };*/
    var genService = function($http)
    {
	var data=function()
	{
	    return $http.get("genService.json");
	}
	var storeNewAssign=function(newData){
	    return $http.post("newAssign/add",newData);
	}
	var addAPerson=function(newPerson){
	    return $http.post("newStudent/add",newPerson);
	}
	return {
	    getData:data,
	    storeAssignment:storeNewAssign,
	    addPerson:addAPerson
	}
    };


//main controller
    var managerController = function($scope,genService,$location,$window,$http){

	dataGenService=[];
	genService.getData()
	.then(function(message)
	      {
		  dataGenService=message.data;
		  $scope.grade = dataGenService[0].student.grade;
		  $scope.tgrade = dataGenService[0].teacher.grade;
		  $scope.assignments = dataGenService[0].assignments;
		  $scope.users = dataGenService[0].users;
	      })
	/*
        $scope.grade = dataGenService[0].student.grade;
        $scope.tgrade = dataGenService[0].teacher.grade;
        $scope.assignments = dataGenService[0].assignments;
        $scope.users = dataGenService[0].users;
	*/

	var maxNumAssignments=3;
        $scope.forgot = function(){
            $location.path("forgot")
        };
        $scope.selectUsers = [
            {user:'Teacher or Student ?'},
            {user:'Teacher'},
            {user:'Student'}
        ];
	$scope.userType = $scope.selectUsers[0];

        $scope.loginsubmit = function(){
            $scope.email = $scope.email.toLocaleLowerCase();
            function useremail(){
                var isUser = false;
                $scope.users.forEach(function(user){
                    if(user.email != undefined && user.email == $scope.email){
                        isUser = true;
                    }
                })
                return isUser;
            }
            if($scope.email == "bradshaw@centre.edu"){
                dataGenService[0].loggedIn = "Prof. Brad";
                localStorage.setItem("loggedIn", "Prof. Brad");
                localStorage.setItem("userType", "teacher");
                $location.path("teacher")
            }
            else if(useremail()){
                var info = $scope.users.filter(function ( obj ) {
                    return obj.email === $scope.email;
                })[0];

                dataGenService[0].loggedIn = info.name;
                localStorage.setItem("loggedIn", info.name);
                if(info.role=="Student"){
                    $location.path("student")
                    localStorage.setItem("userType", "student");
                }
                else{
                    $location.path("teacher")
                    localStorage.setItem("userType", "teacher");
                }
            }
            else if($scope.email == "joe@centre.edu"){
                dataGenService[0].loggedIn = "Joe Blake";
                localStorage.setItem("loggedIn", "Joe Blake");
                localStorage.setItem("userType", "student");
                $location.path("student")
            }
            else{
                $scope.loginError = true;
            }
        }
        $scope.loggedIn = localStorage.getItem("loggedIn");
        
        
        $scope.signupsubmit = function(){
            if($scope.userType.user != 'Teacher or Student ?'){
                $scope.nulltype = false;
                function getInitial(fname, lname){
                    return fname.charAt(0).toLocaleUpperCase()+lname.charAt(0).toLocaleUpperCase()
                }
                function getCap(fname) {
                   var fnameSplit = fname.toLowerCase().split(' ');
                   for (var i = 0; i < fnameSplit.length; i++) {
                       fnameSplit[i] = fnameSplit[i].charAt(0).toUpperCase() + fnameSplit[i].substring(1);     
                   }
                   return fnameSplit.join(' '); 
                }
                var fullname = $scope.fname + ' ' + $scope.lname;
                fullname = getCap(fullname)
                var e = 0;
		console.log(dataGenService[0].users);
                dataGenService[0].users.forEach(function(user, i, array){
                    if (!(Object.values(user).indexOf(fullname) > -1)){
                        e++;
                        if(array.length == e){
                            dataGenService[0].users.push({
                                name: fullname,
                                bio: "Eating a whole apple core because you can’t be bothered going to the bin, admit it, you’ve done it. Every storm runs out of rain. Fabulous ends in “us” coincidence? I think not",
                                initial: getInitial($scope.fname, $scope.lname),
                                tasks: ["Encrypt", "Code Login", "Home Page", "Express Lib"],
                                email: $scope.semail,
                                role: $scope.userType.user
                            });
                            $scope.signUpError = false;
                            $scope.signUpOk = true;
			    genService.addPerson(dataGenService[0].users[dataGenService[0].users.length-1]);
                        }
                    }
                    else{
                        $scope.signUpError = true;
                        $scope.signUpOk = false;
			console.log("stuff");
                    }
                })
            }
            else{
                $scope.nulltype = true;
            }
        }
        
        $scope.gotoStudent = function(){
            $location.path("student");
        }
        $scope.gotoTeacher = function(){
            $location.path("teacher")
        }
        $scope.click = function(loc){
            if(loc == "review"){
                $window.location.href = 'https://docs.google.com/document/d/1sMD8Xx6WMVQn6jvMBMclTKu0TKz-Uj53zZV88jP8F7U/edit?usp=sharing' 
            }
//            else if(loc == "inquiry"){
//                $location.path('assignment')
//            }
        }
    }

    //end of manager controller

//custom filters
    var homeworkfilter = function(){
          return function(item, due){
              var itemlist = [];
              item.forEach(function(mem){
                  if(due == 'today'){
                      if(mem.due == 1 || mem.due == 3 || mem.due == 5){
                          itemlist.push(mem)
                      }
                  }
                  else if(due == 'tomorrow'){
                      if(mem.due == 7 || mem.due == 9 || mem.due == 11){
                          itemlist.push(mem)
                      }
                  }
                  else if(due == 'future'){
                      if(mem.due == 13 || mem.due == 15){
                          itemlist.push(mem)
                      }
                  }
              })
              return itemlist;
          }
    };
    var gradeFilter = function(){
          return function(item){
                item = parseInt(item);
                if(item >= 90){
                  return 'A';
                }  
                else if(item >= 80){
                  return 'B';
                }  
                else if(item >= 70){
                  return 'C';
                }  
                else if(item >= 60){
                  return 'D';
                }  
                else{
                  return 'F';
                }  
          }
        }

//assignment controller
    var assignmentController = function($scope,genService, $routeParams, $location){
	var assignIndex=-1;
	$scope.assignIndex=assignIndex;

	var title = $routeParams.title;
	genService.getData()
	.then(function(message)
	      {
		  dataGenService=message.data;		 
		  $scope.dataService=dataGenService;
		  if(title != "new"){
		      dataGenService[0].assignments.forEach(function(item, i){			  

			  if(title == item.title)
			  {
			     
			      $scope.title = item.title;
			      $scope.due = item.due;

			      $scope.description = item.description;

			      $scope.assignmentGrade = item.grade;

			      assignIndex = i;
			      $scope.assignIndex=assignIndex;
			      if(item.grade == undefined){
				  $scope.assignGrade = true;
			      }
			      else{
				  $scope.assignGradeVal = $scope.assignmentGrade;
			      }

			  } 
			  
		      });
		      $scope.edit = $scope.editH = $scope.editDue = false;
		      }
		  else{
		      $scope.edit = $scope.editH = $scope.editDue = true;
		      $scope.createAssign = function(title, due, instructions){
			  var newAssign=({
			      title: title,
			      indicator: 'I',
			      due: due,
			      description: instructions,
			      g: false,
			      submit: false,
			      pcomplete: "0%",
			      color: "red",
			      group: []
			  });
			  genService.storeAssignment(newAssign);
			  $location.path("teacher");

		      }
		  }
	      })
        $scope.loggedIn = localStorage.getItem("loggedIn");
            
        
        //student homework
        $scope.add = function(section){
            if(title != "new"){
                if(section == "body"){
                    $scope.edit = true;
                    $scope.editedText = $scope.description;   
                }
                else if(section == "grade"){
                    $scope.assignGrade = true; 
                }
                else{
                    $scope.editH = true;
                    $scope.editedTexth = $scope.title;   
                }
            }    
        }
        
        
        $scope.done = function(section, text){
            if(title != "new"){
                if(section == "body"){
                    $scope.edit = false;
                    dataGenService[0].assignments[assignIndex].description = $scope.editedText;
		    console.log($scope.editedText);
                    $scope.description = $scope.editedText;
                }
                else if(section == "grade"){
                    $scope.assignGrade = false;
                    dataGenService[0].assignments[assignIndex].grade = $scope.assignGradeVal;
                    dataGenService[0].assignments[assignIndex].g = true;
                    $scope.assignmentGrade = $scope.assignGradeVal;
                }
                else{
                    $scope.editH = false;
                    dataGenService[0].assignments[assignIndex].title = $scope.editedTexth;
                    $scope.title = $scope.editedTexth;
                }
            }
            else{
                if(section == "body"){
                    $scope.edit = false;
//                    genService[0].assignments[assignIndex].description = $scope.editedText;
                    $scope.description = $scope.editedText;
                }
                else if(section == "grade"){
                    $scope.assignGrade = false;
//                    genService[0].assignments[assignIndex].grade = $scope.assignGradeVal;
//                    genService[0].assignments[assignIndex].g = true;
                    $scope.assignmentGrade = $scope.assignGradeVal;
                }
                else{
                    $scope.editH = false;
                      
//                    genService[0].assignments[assignIndex].title = $scope.editedTexth;
                    $scope.title = $scope.editedTexth;
                }
            }    
        }
        //ask question as student or teacher
        $scope.askQ = function(items){
            if(assignIndex != undefined){
                $scope.questions = dataGenService[0].assignments[assignIndex].question;   
            }
            if(items == "hideforQ"){
                $scope.hideforQ = true;
            }
            else{
                $scope.thideforQ = true;
            }
        }
        
        //Submit question as student
        $scope.doneQ = function(role){
            if(role == 'student'){
                $scope.hideforQ = false;   
            }
            else{
                $scope.thideforQ = false;   
            }
        }
        
        $scope.sendMessage = function(val, role){
	    try{
            if(title != "new"){
                if(dataGenService[0].assignments[assignIndex].question == undefined){
                    dataGenService[0].assignments[assignIndex].question = [{
                        q: '',
                        prof: '',
                        student: ''
                    }];
                    $scope.questions = dataGenService[0].assignments[assignIndex].question;
                }
                if(role == 'student'){
                    $scope.qVal = '';
                    $scope.questions.push({
                        q: val,
                        prof: "",
                        student: "student"
                    });
                    if($scope.questions[0].q == ""){
                        $scope.questions.splice(0, 1)
                    }
		    console.log($scope.questions);
                }
                else{
                    $scope.ansQval = '';
                    $scope.questions.push({
                     q: val,
                     prof: "teacher",
                     student: ""
                    }); 
                    if($scope.questions[0].q == ""){
                        $scope.questions.splice(0, 1)
                    }
                }
            }
	    }
	    catch(err){
		console.log(err);
	    }
        }
        
        $scope.gotoStudent = function(){
            $location.path("student");
        }
        $scope.gotoTeacher = function(){
            $location.path("teacher")
        }
    }

//profile controller
    var profileController = function($scope,genService, $routeParams){
	genService.getData()
	    .then(function(message)
		  {
		      dataGenService=message.data[0];		  	  	
		      var name = $routeParams.name;
		      $scope.person=dataGenService.users.find(function(element){
			  return element.name==name;
		      })							   


		      var userType = $scope.person.role;
		      console.log("<<<>>>>");
		      console.log(userType);
		      console.log("<<<>>>>");
		      if($scope.loggedIn == "Prof. Brad" || userType == "Teacher"){
			  $scope.assignmentRoute = "tassignment";
		      }
		      else if($scope.loggedIn == "Joe Blake" || userType == "Student"){
			  $scope.assignmentRoute = "assignment";
		      }
		      $scope.name = $scope.person.name;
		      $scope.bio = $scope.person.bio;
		      $scope.initial = $scope.person.initial;
		      $scope.tasks = $scope.person.tasks;
		      console.log($scope.person);
		      /*
		      dataGenService.users.forEach(function(item){
			  if(name == item.initial){
			      $scope.name = item.name;
			      $scope.bio = item.bio;
			      $scope.initial = item.initial;
			      $scope.tasks = item.tasks;
			  } 
			  else if(name == item.name){
			      $scope.name = item.name;
			      $scope.bio = item.bio;
			      $scope.initial = item.initial;
			      $scope.tasks = item.tasks;
			  } 
		      });
		      */
		  })
    }
    
    //Directives
    var gradeDirective = function()
    {
	return {
	    scope:{
            type: "@",
            grade: "="
        },
	    templateUrl:"Directives/gradeDirective.html"
	    };
    };
    
    var groupAssignmentDir = function()
    {
	return {
	    scope:{
            link: '@',
            assignments: "=assignments"
        },
	    templateUrl:"Directives/groupAssignment.html"
	    };
    };

    var homeGroupAssignDir = function()
    {
	return {
	    scope:{
            link: '@',
            assignments: "="
        },
	    templateUrl:"Directives/homeGroupAssign.html"
	    };
    };

    var actionBoxDir = function()
    {
	return {
	    scope:{
            create: '@',
            complete: '@',
            icon: '@',
            icon1: '@',
            title: '@',
            action: '@',
            click: '='
        },
	    templateUrl:"Directives/actionBox.html"
	    };
    };

    var assignmentListDir = function()
    {
	return {
	    scope:{
            link: '@',
            assignments: "="
        },
	    templateUrl:"Directives/assignmentList.html"
	    };
    };
    
    var ngEnter = function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    }

//router config
    var routingConfig = function($routeProvider){
	$routeProvider
	.when("/",
	      {
		  templateUrl:"loginview.html",
		  controller:"managerController"
	      })
	.when("/forgot",
	      {
		  templateUrl:"forgotview.html",
		  controller:"managerController"
	      })
	.when("/student",
	      {
		  templateUrl:"studentview.html",
		  controller:"managerController"
	      })
	.when("/teacher",
	      {
		  templateUrl:"teacherview.html",
		  controller:"managerController"
	      })
	.when("/assignment/:title",
	      {
		  templateUrl:"homeworkview.html",
		  controller:"assignmentController"
	      })
	.when("/tassignment/:title",
	      {
		  templateUrl:"t_homework.html",
		  controller:"assignmentController"
	      })
	.when("/profile/:name",
	      {
		  templateUrl:"profileview.html",
		  controller:"profileController"
	      })
	.otherwise({redirectTo:"/john.html"});
    };


//register angular components
    angular
    .module("manager")
    .controller("managerController",managerController)
    .controller("assignmentController",assignmentController)
    .controller("profileController",profileController)
    .directive("gradeDirective",gradeDirective)
    .directive("groupAssignment",groupAssignmentDir)
    .directive("homeGroupAssign",homeGroupAssignDir)
    .directive("actionBox",actionBoxDir)
    .directive("assignmentList",assignmentListDir)
    .directive('ngEnter', ngEnter)
    .filter("homeworkfilter",homeworkfilter)
    .filter("gradeFilter",gradeFilter)
    .config(['$routeProvider',routingConfig])
    .service("genService",genService);


})();
