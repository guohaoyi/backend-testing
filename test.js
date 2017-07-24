var test_Data = function(){
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
                        tasks: ["Design Login", "Code Login", "Encrypt"],
			email:"josh.boldt@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Morgan Hites",
                        bio: "Don’t follow me because I don’t even know where I’m going. At last I graduated…….Now thermometer is not the only thing in the world having degrees without brains. Recommended by 4 out of 5 people that recommend things.",
                        initial: "MH",
                        tasks: ["Design Login", "Encrypt", "Express Lib", "MongoJS"],
			email:"morgan.hites@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Ryland Atkins",
                        bio: "Contributing To Entropy Since 1992. Everyone on this earth is self-centered, the difference is the radius.",
                        initial: "RA",
                        tasks: ["Design Login", "Code Login", "Home Page", "Encrypt"],
			email:"ryland.atkins@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Joe Blake",
                        bio: "People of my age are busy with Relation, break up, heart break, patch ups and I am still figuring out a way to wake up before 10 am. I am so poor,i cant even pay attention. The best of me is yet to come. There are two kinds of people in this world… And I don´t like them",
                        initial: "JB",
                        tasks: ["Encrypt", "Code Login", "Home Page", "Express Lib"],
			email:"joe.blake@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Jamie Sam",
                        bio: "Professional procrastinator. Analogue at birth, digital by design",
                        initial: "JS",
                        tasks: ["Design Login", "Encrypt", "Express Lib", "MongoJS"],
			email:"jamie.sam@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Catherine Tuttery",
                        bio: "Camping is intents. Chocolate doesn’t ask questions, chocolate understands. Coffee-Drinker, eReader Addict, Blogger. I’m very busy and awesome",
                        initial: "CT",
                        tasks: ["Design Login", "Code Login", "Encrypt"],
			email:"catherine.tuttery@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Ursella Vladas",
                        bio: "Perfect has 7 letters and so does meeeeee. Coincidence? I think not. Please insert pretentious crap about myself here.",
                        initial: "UV",
                        tasks: ["Design Login", "Code Login", "Encrypt", "MongoJS"],
			role:"Student"
                    },
                    {
                        name: "Ashish Safandi",
                        bio: "My relationship status? Netflix, Oreos and sweatpants. Naturally and artificially flavored. Nice guys finish lunch.",
                        initial: "AS",
                        tasks: ["Design Login", "Code Login", "MongoJS"],
			email:"ashish.safandi@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Derkon Flopot",
                        bio: "My hobbies are breakfast, lunch, and dinner. My life is about as organized as the $5 DVD bin at Wal-Mart. My life was changed by a train.",
                        initial: "DF",
                        tasks: ["Design Login", "Code Login", "Home Page"],
			email:"derkon.flopot@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Gogh Hamlet",
                        bio: "Living vicariously through myself. Making the Snuggie look good since 2009. Mama said life is like a box of chocolates, you never know what your gonna get",
                        initial: "GH",
                        tasks: ["Design Login", "Code Login", "Form Valid", "Express Lib"],
			email:"gogh.hamlet@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Savannah Atkinson",
                        bio: "I put the hot in psychotic. I recently gave up Warcraft so my productivity, and drinking, have increased dramatically.",
                        initial: "SA",
                        tasks: ["Design Login", "Form Valid"],
			email:"savannah.atkinson@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Doplilia Servius",
                        bio: "I hope one day I love something the way women in commercials love yogurt. I looked at my Instagram photos and realized I look beautiful. I once sneezed a beanie weenie through my nose. I also made a horse faint in Costa Rica. I only rap caucasionally. I prefer my puns intended",
                        initial: "DS",
                        tasks: ["Form Valid", "Code Login", "MongoJS"],
			email:"doplilia.servius@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Ford Doofilius",
                        bio: "I am coming back to face the reality that a normal day is not beer on the beach or calamari in the belly. I can quote (Insert movie) better than you and all your friends. I Can’t remember who I stole my bio from or why. I have not lost my mind – it’s backed up on HD somewhere.",
                        initial: "FD",
                        tasks: ["Design Login", "Code Login", "MongoJS"],
			email:"ford.doofilius@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Rememma Etea",
                        bio: "Have lots of hair and like ugly things. Here to serve…. the cat overlord. I always feel sad for seedless watermelons, because what if they wanted babies?",
                        initial: "RE",
                        tasks: ["Design Login", "Code Login", "Home Page", "Form Valid"],
			email:"rememma.etea@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Yolandi Tevessa",
                        bio: "enerally, the path of least resistance appeals. Also, I am excellent at parallel parking. God bless this hot mess. Good Samaritan, washed-up athlete, especially gifted napper.",
                        initial: "YT",
                        tasks: ["Design Login", "Code Login"],
			email:"yolandi.tevessa@centre.edu",
			role:"Student"
                    },
                    {
                        name: "Wiley Ioti",
                        bio: "Eating a whole apple core because you can’t be bothered going to the bin, admit it, you’ve done it. Every storm runs out of rain. Fabulous ends in “us” coincidence? I think not",
                        initial: "WI",
                        tasks: ["Home Page", "Design Login", "Code Login", "Form Valid", "Express Lib", "MongoJS"],
			email:"wiley.ioti@centre.edu",
			role:"Student"
                    },
		    {
                        name: "Michael Bradshaw",
                        bio: "Eating a whole apple core because you can’t be bothered going to the bin, admit it, you’ve done it. Every storm runs out of rain. Fabulous ends in “us” coincidence? I think not",
                        initial: "MB",
                        tasks: ["Home Page", "Design Login", "Code Login", "Form Valid", "Express Lib", "MongoJS"],
			email:"michael.bradshaw@centre.edu",
			role:"Teacher"
                    }
                ]
            }
        ];
};

var checkGradefilter=function()
{

    console.log(gradeFilter());
    it("should exist",function(){
	expect(gradeFilter).toBeDefined();
	})
    /*for(var i=100;i>=90; i++){
	if(i>=90){
	    it("should return A",function()
	    {
		gradeFilter(i).toEqualData('A');
		})
	}
    }*/
}

describe("Testing index loaded",function()
{	 
    var index;
    beforeEach(function()
	       {
		   index=angular.module("manager");
		   
		   jasmine.addMatchers(
		       {
			   toEqualData: function(util,customeEqualityTesters)
			   {
			       return{
				   compare:function(actual,expected)
				   {
				       return { pass:angular.equals(actual,expected) };
				   }
			       };
			   }
		       });
	       });

    it("should be registered",function()
       {
	   expect(index).toBeDefined();
       });
   
    describe("genService",function(){
	var genServiceModel;
	beforeEach(function()
		   {
		       module("manager");
		       //name of _identifier_ has to match a function in the js
		       //the setter cannot have the same name as _identifier_
		       inject(function(_genService_)
			      {
				  genServiceModel=_genService_;
			      })
		   })
	it("should exist",function()
	   {
	       expect(genServiceModel).toBeDefined();
	   });
		 
	it("should have a get data method",function()
	   {
	       expect(genServiceModel.getData).toBeDefined();
	   });
	it("getData should return the correct data",function()
	   {
	       inject(function($httpBackend)
		      {
			  $httpBackend.expectGET("genService.json")
			      .respond(test_Data());
			  var prom=genServiceModel.getData();
			  prom.then(function(data){
			      expect(data.data).toEqualData(test_Data());
			      });
			  $httpBackend.flush();
			  })
	   });
	
    //genService close
    })
    describe("managerController",function()
	     {
		 var httpBack;
		 var _scope;
		 var genServiceModel;
		 beforeEach(function(){
		     module("manager");
		     inject(function($rootScope,$httpBackend)
			    {
				httpBack=$httpBackend;
				_scope=$rootScope.$new();
			    })
		       inject(function(_genService_)
			      {
				  genServiceModel=_genService_;
			      })

		     })
		 
		 it("should exist",inject(function($controller){
		     var managerController =$controller("managerController",
							{$scope:_scope},genServiceModel);
		     expect(managerController).toBeDefined();
		     }))

		 it("should set dataGenService properly",inject(function($controller){
		     httpBack.expectGET("genService.json")
		     .respond(test_Data());
		     var managerController =$controller("managerController",
							{$scope:_scope},genServiceModel);

		     httpBack.flush();
		     expect(dataGenService).toEqualData(test_Data());		     		     
		 }))
		 it("should set initial scope properts properly",inject(function($controller){
		     httpBack.expectGET("genService.json")
		     .respond(test_Data());
		     var managerController =$controller("managerController",
							{$scope:_scope},genServiceModel);

		     httpBack.flush();
		     expect(_scope.grade).toEqualData(test_Data()[0].student.grade);		     		     
		     expect(_scope.tgrade).toEqualData(test_Data()[0].teacher.grade);		     		     
		     expect(_scope.assignments).toEqualData(test_Data()[0].assignments);		     		     
		     expect(_scope.users).toEqualData(test_Data()[0].users);		     		     
		 }))
		 it("should set forgot path properly",inject(function($controller,$location){
		     var managerController =$controller("managerController",
							{$scope:_scope},genServiceModel);
		     spyOn($location,"path");
		     _scope.forgot();
		     expect($location.path)
		     .toHaveBeenCalledWith("forgot");
		 })
		   )
		 it("should set student path properly",inject(function($controller,$location){
		     var managerController =$controller("managerController",
							{$scope:_scope},genServiceModel);
		     spyOn($location,"path");
		     _scope.gotoStudent();
		     expect($location.path)
		     .toHaveBeenCalledWith("student");
		 })
		   )
		 it("should set teacher path properly",inject(function($controller,$location){
		     var managerController =$controller("managerController",
							{$scope:_scope},genServiceModel);
 		     spyOn($location,"path");
		     _scope.gotoTeacher();
		     expect($location.path)
		     .toHaveBeenCalledWith("teacher");
		 })		  
		   )

		 it("should add a new student properly",inject(function($controller,$location){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());		     

		     var managerController =$controller("managerController",
							{$scope:_scope},genServiceModel,httpBack);
		     httpBack.flush();
		     _scope.fname="Alex";
		     _scope.lname="Luken";
		     _scope.semail="alex.luken@centre.edu";
		     _scope.spassword="123456";
		     _scope.userType=_scope.selectUsers[2];
		     _scope.signupsubmit();

		     httpBack.expectPOST("newStudent/add",
					{
					    name: _scope.fname+' '+_scope.lname,
					    bio: "Eating a whole apple core because you can’t be bothered going to the bin, admit it, you’ve done it. Every storm runs out of rain. Fabulous ends in “us” coincidence? I think not",
					    initial: "AL",
					    tasks: ["Encrypt", "Code Login", "Home Page", "Express Lib"],
					    email: _scope.semail,
					    role: _scope.userType.user

					}).respond(true);
		     httpBack.flush();

		     
		     }))

		 it("should allow student log in properly",inject(function($controller,$location){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());		     

		     var managerController =$controller("managerController",
							{$scope:_scope},genServiceModel);
		     httpBack.flush();
		     _scope.email="josh.boldt@centre.edu";
		     spyOn($location,"path");
		     _scope.loginsubmit();
		     expect($location.path)
		     .toHaveBeenCalledWith("student");


		 }))
		 it("should allow teacher log in properly",inject(function($controller,$location){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());		     

		     var managerController =$controller("managerController",
							{$scope:_scope},genServiceModel);
		     httpBack.flush();
		     _scope.email="bradshaw@centre.edu";
		     spyOn($location,"path");
		     _scope.loginsubmit();
		     expect($location.path)
		     .toHaveBeenCalledWith("teacher");


		 }))


	     })


/*  
  describe("Grade filter",function(){		    
	var testGradeFilter;
	beforeEach(function()
		   {
		       module("manager");
		       //name of _identifier_ has to match a function in the js
		       //the setter cannot have the same name as _identifier_
		       inject(function(_homeworkfilter_)
			      {
				  testGradeFilter=_homeworkfilter_;
			      })
		   })
	
	it("should exist",function(){
	    expect(testGradeFilter).toBeDefined();
	})
	})
*/
    
    describe("profile controller",function(){
	var httpBack;
	var _scope;
	var genServiceModel;
	beforeEach(function(){
	    module("manager");
	    inject(function($rootScope,$httpBackend)
		   {
		       httpBack=$httpBackend;
		       _scope=$rootScope.$new();
		   })
	    inject(function(_genService_)
		   {
		       genServiceModel=_genService_;
		   })

	})
	it("should exist",inject(function($controller,$location){
	    var profileController=$controller("profileController",
					       {$scope:_scope},genServiceModel);
	    expect(profileController).toBeDefined();
	}))
	it("should set assignment route to teacher properly",inject(function($controller,$location){
	    httpBack.expectGET("genService.json")
		.respond(test_Data());

	    var _routeParams = {name: "Michael Bradshaw"};
	    var profileController =$controller("profileController",
					       {$scope:_scope,
					       $routeParams:_routeParams},genServiceModel);

	    httpBack.flush();	    



	    expect(_scope.assignmentRoute).toEqualData("tassignment");

	}))	

	it("should set assignment route to student properly",inject(function($controller,$location){
	    httpBack.expectGET("genService.json")
		.respond(test_Data());

	    var _routeParams = {name: "Josh Boldt"};
	    var profileController =$controller("profileController",
					       {$scope:_scope,
					       $routeParams:_routeParams},genServiceModel);
	    httpBack.flush();	   	    
	    expect(_scope.assignmentRoute).toEqualData("assignment");
	}))
	it("should set items for student properly",inject(function($controller,$location){
	    httpBack.expectGET("genService.json")
		.respond(test_Data());

	    var _routeParams = {name: "Josh Boldt"};
	    var profileController =$controller("profileController",
					       {$scope:_scope,
					       $routeParams:_routeParams},genServiceModel);
	    httpBack.flush();
	    var user=test_Data()[0].users;
	    var person=user.find(function(element){
		return element.name==_routeParams.name;
	    });
	    expect(_scope.name).toEqualData(person.name);
	    expect(_scope.bio).toEqualData(person.bio);
	    expect(_scope.initial).toEqualData(person.initial);
	    expect(_scope.tasks).toEqualData(person.tasks);
	    }))
	it("should set items for teachers properly",inject(function($controller,$location){
	    httpBack.expectGET("genService.json")
		.respond(test_Data());

	    var _routeParams = {name: "Michael Bradshaw"};
	    var profileController =$controller("profileController",
					       {$scope:_scope,
					       $routeParams:_routeParams},genServiceModel);
	    httpBack.flush();
	    var user=test_Data()[0].users;
	    var person=user.find(function(element){
		return element.name==_routeParams.name;
	    });
	    expect(_scope.name).toEqualData(person.name);
	    expect(_scope.bio).toEqualData(person.bio);
	    expect(_scope.initial).toEqualData(person.initial);
	    expect(_scope.tasks).toEqualData(person.tasks);
	    }))


    })
    describe("Home Group Assign directive",function()
	     {
		 var compile,_scope,directiveElem;
		 beforeEach(function(){
		     module("manager");
		     module("Directives/homeGroupAssign.html");
		     inject(function($compile,$rootScope){
			 compile=$compile;
			 _scope=$rootScope.$new();
		     });
		     directiveElem=getCompiledElement();
		 });
		 var getCompiledElement=function(){
		     var element=angular.element('<home-group-assign assignments="assignments" link="assignment"  />');
		     _scope.assignments=test_Data()[0].assignments;
		     var compiledElement=compile(element)(_scope);
		     _scope.$digest();
		     return compiledElement;
		 }
		 it('should have elements',function(){
		     var assignments=directiveElem;
		     var m=test_Data()[0].assignments;
		     expect(assignments).toBeDefined();
		     console.log(assignments.find(".g_member*>a"));		 
		 })
		 it('should set homework titles properly',function(){
		     var assignments=directiveElem;
		     var m=test_Data()[0].assignments;
		     var items=assignments.find(".asg_item*>p");
		     var acc=0;		     
		     for(var acc=0; acc <items.length;acc++){
			 expect(items[acc].innerText).toEqualData(m[acc].title);
			 acc++;
		     }
		 })
		 it('should set partners properly',function(){
		     var assignments=directiveElem;
		     var m=test_Data()[0].assignments;
		     var items=assignments.find(".g_member*>a");
		     console.log(items);
		     var acc=0;
		     for(var fLoop=0; fLoop<3; fLoop++){
			 for(var groupMembers in m[fLoop].group){
			     expect(items[acc].innerText).toEqualData(m[fLoop].group[groupMembers]);
			     acc++;
			 }
		     }
		 })
		 it('should set homework view properly',function(){
		     var assignments=directiveElem;
		     var m=test_Data()[0].assignments;
		     var items=assignments.find(".view*>a");
		     var acc=0;		     
		     var parseString;
		     console.log(items);
		     for(var acc=0; acc <items.length;acc++){
			 parseString=items[acc].href.split("#!/assignment/")[1];
			 expect(parseString).toEqualData(m[acc].title);
			 acc++;
		     }
		 })




	     })
    describe("Group Assign directive",function()
	     {
		 var compile,_scope,directiveElem;
		 beforeEach(function(){
		     module("manager");
		     module("Directives/groupAssignment.html");
		     inject(function($compile,$rootScope){
			 compile=$compile;
			 _scope=$rootScope.$new();
		     });
		     directiveElem=getCompiledElement();
		 });
		 var getCompiledElement=function(){
		     var element=angular.element('<group-assignment assignments="assignments" link="assignment"  />');
		     _scope.assignments=test_Data()[0].assignments;
		     var compiledElement=compile(element)(_scope);
		     _scope.$digest();
		     return compiledElement;
		 }
		 it('should have elements',function(){
		     var assignments=directiveElem;
		     var m=test_Data()[0].assignments;
		     expect(assignments).toBeDefined();
		     console.log(assignments.find(".g_member*>a"));		 
		 })

		 it('should set homework titles properly',function(){
		     var assignments=directiveElem;
		     var m=test_Data()[0].assignments;
		     var items=assignments.find(".asg_item*>p");
		     var acc=0;		     
		     for(var acc=0; acc <items.length;acc++){
			 expect(items[acc].innerText).toEqualData(m[acc].title);
			 acc++;
		     }
		 })

		 it('should set partners properly',function(){
		     var assignments=directiveElem;
		     var m=test_Data()[0].assignments;
		     var items=assignments.find(".g_member*>a");
		     console.log(items);
		     var acc=0;
		     for(var fLoop=0; fLoop<8; fLoop++){
			 for(var groupMembers in m[fLoop].group){
			     expect(items[acc].innerText).toEqualData(m[fLoop].group[groupMembers]);
			     acc++;
			 }
		     }
		 })

		 it('should set homework view properly',function(){
		     var assignments=directiveElem;
		     var m=test_Data()[0].assignments;
		     var items=assignments.find(".view*>a");
		     var acc=0;		     
		     var parseString;
		     console.log(items);
		     for(var acc=0; acc <items.length;acc++){
			 parseString=items[acc].href.split("#!/assignment/")[1];
			 expect(parseString).toEqualData(m[acc].title);
			 acc++;
		     }
		 })
	     })

    describe("Grade Directive",function()
	     {
		 var compile,_scope,directiveElem;
		 var type="average";
		 var gradeData="A 93%";
		 beforeEach(function(){
		     module("manager");
		     module("Directives/gradeDirective.html");
		     inject(function($compile,$rootScope){
			 compile=$compile;
			 _scope=$rootScope.$new();
		     });
		     directiveElem=getCompiledElement();
		 });
		 var getCompiledElement=function(){
		     var element=angular.element('<grade-directive type="average" grade="grade"  />');
		     _scope.grade=gradeData;
		     console.log(_scope);
		     var compiledElement=compile(element)(_scope);
		     _scope.$digest();
		     return compiledElement;
		 }
		 it('should have elements',function(){
		     var grade=directiveElem;
		     var m=test_Data()[0].assignments;
		     expect(grade).toBeDefined();
		 })
		 it("should have type added correctly",function(){
		     var grade=directiveElem;
		     var m=test_Data()[0].assignments;
		     var header=grade.find("#h2*")[0];
		     console.log(header);
		     expect(header.innerText).toEqualData("Class "+type);
		   
		 })
		 it("should have grade added correctly",function(){
		     var grade=directiveElem;
		     var m=test_Data()[0].assignments;
		     var gradeDisplay=grade.find(".ass_cl_gr*")[0];		     
		     expect(gradeDisplay.innerText).toEqualData(gradeData);
		 })


	     })

    describe("action box Directive",function()
	     {
		 var compile,_scope,directiveElem;
		 var create="create stuff";
		 var trash="trash things";
		 var icon="plus";
		 var icon1="-";
		 var title="Testing a lot";

		 beforeEach(function(){
		     module("manager");
		     module("Directives/actionBox.html");
		     inject(function($compile,$rootScope){
			 compile=$compile;
			 _scope=$rootScope.$new();
		     });
		     directiveElem=getCompiledElement();
		 });
		 var getCompiledElement=function(){
		     var element=angular.element('<div id="ass_g_mem" action-box title="'+title+'" create="'+create+'" complete="'+trash+'" icon="'+icon+'" icon1="'+icon1+'"></div>'
						);		     
		     console.log(element);
		     var compiledElement=compile(element)(_scope);
		     _scope.$digest();
		     return compiledElement;
		 }
		 it('should have elements',function(){
		     var div=directiveElem;
		     expect(div).toBeDefined();
		 })
		 it('should have create right',function(){
		     var div=directiveElem;
		     var paragraphs=div.find(".create*>div>p");
		     var words=create.split(" ");
		     for(var word in words){
			 expect(paragraphs[word].innerText).toEqualData(words[word]);
		     }
		     
		 })
		 it('should set icon correctly',function(){
		     var div=directiveElem;
		     var iconpic=div.find(".add*>i")[0];
		     var classParse=iconpic.className.split("fa-")[1];
		     classParse=classParse.split(" ")[0];
		     expect(classParse).toEqualData(icon);		     
		 })
		 it('should have add right',function(){
		     var div=directiveElem;
		     var paragraphs=div.find(".archive*>div>p");
		     console.log(paragraphs);
		     var words=trash.split(" ");
		     for(var word in words){
			 expect(paragraphs[word].innerText).toEqualData(words[word]);
		     }
		     
		 })
		 it('should set icon1 correctly',function(){
		     var div=directiveElem;
		     var iconpic=div.find(".add*>i")[1];
		     var classParse=iconpic.className.split("fa-")[1];
		     classParse=classParse.split(" ")[0];
		     expect(classParse).toEqualData(icon1);		     
		 })



	     })    

    describe("assignment list Directive",function()
	     {
		 var compile,_scope,directiveElem;

		 beforeEach(function(){
		     module("manager");
		     module("Directives/assignmentList.html");
		     inject(function($compile,$rootScope){
			 compile=$compile;
			 _scope=$rootScope.$new();
		     });
		     directiveElem=getCompiledElement();
		 });
		 var getCompiledElement=function(){
		     var element=angular.element('<div assignment-list assignments="assignments" link="assignment"></div>'  
						);		   
		     _scope.assignments=test_Data()[0].assignments;
		     var compiledElement=compile(element)(_scope);
		     _scope.$digest();
		     return compiledElement;
		 }

		 it('should have elements',function(){
		     var assignmentList=directiveElem;
		     expect(assignmentList).toBeDefined();
		 })
		 it('should set today correctly',function(){
		     var assignmentList=directiveElem;
		     var todayList=directiveElem.find("#today*>div>ol>li>a");
		     var checkList=[];
		     var m=test_Data()[0].assignments;
		     for(var i=0; i<todayList.length;i++){
			 checkList.push(todayList[i].innerText);
		     }
		     for(var item in m){
			 if(m[item].due=="1" || m[item].due=="3" || m[item].due=="5"){
			     expect(checkList).toContain(m[item].title);
			 }
		     }
		 })
		 it('should set tomorrow correctly',function(){
		     var assignmentList=directiveElem;
		     var tomorrowList=directiveElem.find("#tomorrow*>div>ol>li>a");
		     var checkList=[];
		     var m=test_Data()[0].assignments;
		     for(var i=0; i<tomorrowList.length;i++){
			 checkList.push(tomorrowList[i].innerText);
			 console.log(tomorrowList[i].innerText);
		     }
		     for(var item in m){
			 if(m[item].due=="7" || m[item].due=="9" || m[item].due=="11"){			     
			     expect(checkList).toContain(m[item].title);
			 }
		     }
		 })
		 it('should set tomorrow correctly',function(){
		     var assignmentList=directiveElem;
		     var futureList=directiveElem.find("#future*>div>ol>li>a");
		     var checkList=[];
		     var m=test_Data()[0].assignments;
		     for(var i=0; i<futureList.length;i++){
			 checkList.push(futureList[i].innerText);
		     }
		     console.log(m);
		     for(var item in m){
			 if(m[item].due=="13" || m[item].due=="15"){
			     expect(checkList).toContain(m[item].title);
			 }
		     }
		 })


	     })					  

    describe("assignmentController",function()
	     {
		 var httpBack;
		 var _scope;
		 var genServiceModel;
		 var _routeParams;
		 beforeEach(function(){
		     module("manager");
		     inject(function($rootScope,$httpBackend)
			   {
			       httpBack = $httpBackend;
			       _scope = $rootScope.$new();
			   })
		     inject(function(_genService_)
			    {
				genServiceModel = _genService_;
			    })
		 })
	     
		 it("should exist",inject(function($controller){
		     var _routeParams = {title: "new"};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     expect(assignmentController).toBeDefined();
		 }))
		 it("should set dataGenService properly",inject(function($controller){
		     httpBack.expectGET("genService.json")
		     .respond(test_Data());
		     var _routeParams = {title: "new"};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     expect(dataGenService).toEqualData(test_Data());
		 }))

		 it("should set dataGenService properly for existing assignments",inject(function($controller){
		     httpBack.expectGET("genService.json")
		     .respond(test_Data());
		     var _routeParams = {title: "Design Login"};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     expect(dataGenService).toEqualData(test_Data());
		 }))



		 it("should load existing assignments correctly",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var anAssignment=test_Data()[0].assignments[0];
		     var _routeParams = {title: anAssignment.title};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     expect(_scope.title).toEqualData(anAssignment.title);
		     expect(_scope.due).toEqualData(anAssignment.due);
		     expect(_scope.description).toEqualData(anAssignment.description);
		     expect(_scope.assignmentGrade).toEqualData(anAssignment.grade);
		     expect(_scope.edit || _scope.editH || _scope.editDue).toEqualData(false);
		 }))
		 it("should create createAssign correctly",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var _routeParams = {title: "new"};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     expect(_scope.createAssign).toBeDefined();
		 }))
		 it("should load new assignments correctly",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var _routeParams = {title: "new"};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     expect(_scope.edit && _scope.editH && _scope.editDue).toEqualData(true);
		 }))
		 it("should create new assignments correctly",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var anAssignment=test_Data()[0].assignments[0];		     
		     var _routeParams = {title: "new"};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     var title="stuff make";
		     var due="5";
		     var instructions="Do this thing for me";
		     httpBack.expectPOST("newAssign/add",{
			 title: title,
			 indicator: 'I',
			 due: due,
			 description: instructions,
			 g: false,
			 submit: false,
			 pcomplete: "0%",
			 color: "red",
			 group: []
		     }

		     ).respond(true);

		     _scope.createAssign(title,due,instructions);
		     httpBack.flush();
		     
		 }))

		 it("add should exist",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var _routeParams = {title: "new"};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     expect(_scope.add).toBeDefined();
		 }))
		 it("should load existing assignments correctly for students",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var anAssignment=test_Data()[0].assignments[0];
		     var _routeParams = {title: anAssignment.title};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     _scope.add("body");
		     expect(_scope.edit).toEqualData(true);
		     expect(_scope.editedText).toEqualData(_scope.description);
		     _scope.add("grade");
		     expect(_scope.assignGrade).toEqualData(true);
		     _scope.add("gra");
		     expect(_scope.editH).toEqualData(true);
		     expect(_scope.editedTexth).toEqualData(_scope.title);
		 }))
		 it("done should exist",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var _routeParams = {title: "new"};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     expect(_scope.done).toBeDefined();
		 }))
		 it("done should set things correctly for body",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var anAssignment=test_Data()[0].assignments[0];
		     var _routeParams = {title: anAssignment.title};

		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     _scope.editedText="I hate *****";
		     _scope.done("body","test");
		     expect(_scope.edit).toEqualData(false);
		     expect(dataGenService[0].assignments[_scope.assignIndex].description).toEqualData(_scope.editedText);
		     expect(_scope.description).toEqualData(_scope.editedText);
		 }))
		 it("done should set things correctly for grade",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var anAssignment=test_Data()[0].assignments[0];
		     var _routeParams = {title: anAssignment.title};

		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     _scope.editedText="I hate *****";
		     _scope.done("grade","test");
		     expect(_scope.assignGrade).toEqualData(false);
		     expect(dataGenService[0].assignments[_scope.assignIndex].grade).toEqualData(_scope.assignGradeVal);
		     expect(dataGenService[0].assignments[_scope.assignIndex].g).toEqualData(true);
		     expect(_scope.assignmentGrade).toEqualData(_scope.assignGradeVal);
		 }))
		 it("done should set things correctly for other",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var anAssignment=test_Data()[0].assignments[0];
		     var _routeParams = {title: anAssignment.title};

		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     _scope.editedText="I hate *****";
		     _scope.done("gr","test");
		     expect(_scope.editH).toEqualData(false);
		     expect(dataGenService[0].assignments[_scope.assignIndex].title).toEqualData(_scope.editedTexth);
		     expect(_scope.title).toEqualData(_scope.editedTexth);
		 }))
		 it("done should set things correctly for body new",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var _routeParams = {title: "new"};

		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     _scope.editedText="I hate *****";
		     _scope.done("body","test");
		     expect(_scope.edit).toEqualData(false);
		     expect(_scope.description).toEqualData(_scope.editedText);
		 }))
		 it("done should set things correctly for grade new",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var _routeParams = {title: "new"};

		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     _scope.editedText="I hate *****";
		     _scope.done("grade","test");
		     expect(_scope.assignGrade).toEqualData(false);
		     expect(_scope.assignmentGrade).toEqualData(_scope.assignGradeVal);
		 }))
		 it("done should set things correctly for other new",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		     var _routeParams = {title: "new"};

		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		     httpBack.flush();
		     _scope.editedText="I hate *****";
		     _scope.done("ab","test");
		     expect(_scope.editH).toEqualData(false);
		     expect(_scope.title).toEqualData(_scope.editedTexth);
		 }))

		it("ask q should set its variables correctly",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		    var anAssignment=test_Data()[0].assignments[0];
		    var _routeParams = {title: anAssignment.title};

		    var assignmentController = $controller("assignmentController",
							   {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);

 		    httpBack.flush();
		    _scope.askQ(" asdf");
		    expect(_scope.questions).toEqualData(dataGenService[0].assignments[_scope.assignIndex].question);
		    expect(_scope.thideforQ).toEqualData(true);
		    _scope.askQ("hideforQ");
		    expect(_scope.questions).toEqualData(dataGenService[0].assignments[_scope.assignIndex].question);
		    expect(_scope.hideforQ).toEqualData(true);

		}))
		it("done q should set its variables correctly",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		    var anAssignment=test_Data()[0].assignments[0];
		    var _routeParams = {title: anAssignment.title};

		    var assignmentController = $controller("assignmentController",
							   {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);

 		    httpBack.flush();
		    _scope.doneQ("student");
		    expect(_scope.hideforQ).toEqualData(false);
		    _scope.doneQ("teacher");
		    expect(_scope.thideforQ).toEqualData(false);


		}))

		it("send message should do its actions for students correctly",inject(function($controller){
		     httpBack.expectGET("genService.json")
			 .respond(test_Data());
		    var anAssignment=test_Data()[0].assignments[1];
		    var _routeParams = {title: anAssignment.title};

		    var assignmentController = $controller("assignmentController",
							   {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		    httpBack.flush();
		    var message="stuff";
		    var role="student";
		    _scope.sendMessage(message,role);
		    expect(_scope.questions).toEqualData([{
			q:message,
			prof:"",
			student:"student"
			}]);
		    
		}))
		it("send message should do its actions for teachers correctly",inject(function($controller){
		    httpBack.expectGET("genService.json")
			.respond(test_Data());
		    var anAssignment=test_Data()[0].assignments[1];
		    var _routeParams = {title: anAssignment.title};

		    var assignmentController = $controller("assignmentController",
							   {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);
		    httpBack.flush();
		    var message="stuff";
		    var role="teacher";
		    _scope.sendMessage(message,role);
		    expect(_scope.questions).toEqualData([{
			q:message,
			prof:"teacher",
			student:""
			}]);
		    
		}))
		 it("should set student path properly",inject(function($controller,$location){
		     var _routeParams = {title: "new"};
		    var assignmentController = $controller("assignmentController",
							   {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);

		     spyOn($location,"path");
		     _scope.gotoStudent();
		     expect($location.path)
		     .toHaveBeenCalledWith("student");
		 }))

		 it("should set teacher path properly",inject(function($controller,$location){
		     var _routeParams = {title: "new"};
		    var assignmentController = $controller("assignmentController",
							   {$scope:_scope,
							    $routeParams:_routeParams},genServiceModel);

		     spyOn($location,"path");
		     _scope.gotoTeacher();
		     expect($location.path)
		     .toHaveBeenCalledWith("teacher");
		 }))



		 
	
	     })


		 /*
		 it("should set initial scope properts properly",inject(function($controller){
		     httpBack.expectGET("genService.json")
		     .respond(test_Data());
		     var _routeParams = {title: "new"};
		     var assignmentController = $controller("assignmentController",
							    {$scope:_scope},genServiceModel,_routeParams);
		     httpBack.flush();
		     expect(_scope.grade).toEqualData(test_Data()[0].student.grade);		     		     
		     expect(_scope.tgrade).toEqualData(test_Data()[0].teacher.grade);		     		     
		     expect(_scope.assignments).toEqualData(test_Data()[0].assignments);		     		     
		     expect(_scope.users).toEqualData(test_Data()[0].users);
		 }))
		 */

			    

	     
//testing index close
});
		       
