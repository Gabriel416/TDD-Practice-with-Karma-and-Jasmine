describe("Testing AngularJS test suite", function() {
  beforeEach(module("testingApp"));
  describe("Testing Angular Test Controller", function() {
    var scope;
    var ctrl;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller("testingController", { $scope: scope });
    }));

    afterEach(function() {
      // clean up code
    });

    it("should initialize title in scope", function() {
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("Testing AngularJS Application");
    });

    it("should add a new destination", function() {
      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(0);

      scope.newDestination = {
        city: "London",
        country: "England"
      };

      scope.addDestination();

      expect(scope.destinations.length).toBe(1);
      expect(scope.destinations[0].city).toBe("London");
      expect(scope.destinations[0].country).toBe("England");

      scope.newDestination.city = "Miami";
      scope.newDestination.country = "USA";

      scope.addDestination();

      expect(scope.destinations.length).toBe(2);
      expect(scope.destinations[1].city).toBe("Miami");
      expect(scope.destinations[1].country).toBe("USA");

      expect(scope.destinations[0].city).toBe("London");
      expect(scope.destinations[0].country).toBe("England");
    });

    it("remove a destination from list", function() {
      scope.destinations = [
        {
          city: "London",
          country: "England"
        },
        {
          city: "Warsaw",
          country: "Poland"
        }
      ];

      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(2);

      scope.removeDestination(0);

      expect(scope.destinations.length).toBe(1);
      expect(scope.destinations[0].city).toBe("Warsaw");
      expect(scope.destinations[0].country).toBe("Poland");
    });
  });
});
