export const designPatterns = [
  // Creational Patterns
  {
    id: 1,
    name: "Singleton",
    category: "Creational",
    description: "Ensures a class has only one instance and provides a global point of access to it.",
    example: "Database connection, Logger, Configuration Manager",
    details: "Use when exactly one instance of a class is needed to coordinate actions across the system. It restricts instantiation of a class to a single object."
  },
  {
    id: 2,
    name: "Factory Method",
    category: "Creational",
    description: "Defines an interface for creating an object, but lets subclasses decide which class to instantiate.",
    example: "Document Creator, UI Button Creator in different themes",
    details: "Useful when a class cannot anticipate the class of objects it must create, or when a class wants its subclasses to specify the objects it creates."
  },
  {
    id: 3,
    name: "Abstract Factory",
    category: "Creational",
    description: "Provides an interface for creating families of related or dependent objects without specifying their concrete classes.",
    example: "UI toolkit for different operating systems, Different database connectors",
    details: "Use when your system needs to be independent from how its products are created, composed, and represented, or when a system should be configured with one of multiple families of products."
  },
  {
    id: 4,
    name: "Builder",
    category: "Creational",
    description: "Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.",
    example: "Document converters (HTML to PDF, Text, etc.), Meal construction in a fast food restaurant",
    details: "Useful when the algorithm for creating a complex object should be independent of the parts that make up the object and how they're assembled, or when the construction process must allow different representations for the object that's constructed."
  },
  {
    id: 5,
    name: "Prototype",
    category: "Creational",
    description: "Specifies the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.",
    example: "Cloning objects, Creating copies of complex objects in a game",
    details: "Use when the classes to instantiate are specified at run-time, or to avoid building a factory hierarchy, or when instances of a class can have one of only a few different combinations of state."
  },
  
  // Structural Patterns
  {
    id: 6,
    name: "Adapter",
    category: "Structural",
    description: "Converts the interface of a class into another interface clients expect. Allows classes to work together that couldn't otherwise because of incompatible interfaces.",
    example: "Legacy code integration, Card reader as USB adapter",
    details: "Use when you want to use an existing class, but its interface does not match the one you need, or when you want to create a reusable class that cooperates with unrelated or unforeseen classes."
  },
  {
    id: 7,
    name: "Bridge",
    category: "Structural",
    description: "Decouples an abstraction from its implementation so that the two can vary independently.",
    example: "Different drawing APIs with shapes, Device drivers",
    details: "Useful when both the abstraction and its implementation should be extensible by subclassing, or to avoid a permanent binding between an abstraction and its implementation."
  },
  {
    id: 8,
    name: "Composite",
    category: "Structural",
    description: "Composes objects into tree structures to represent part-whole hierarchies. Lets clients treat individual objects and compositions of objects uniformly.",
    example: "File system (directories and files), Graphic objects in drawing applications",
    details: "Use when you want to represent part-whole hierarchies of objects, or when you want clients to be able to ignore the difference between compositions of objects and individual objects."
  },
  {
    id: 9,
    name: "Decorator",
    category: "Structural",
    description: "Attaches additional responsibilities to an object dynamically. Provides a flexible alternative to subclassing for extending functionality.",
    example: "Adding borders or scrollbars to windows, Adding features to text editors",
    details: "Use when you need to add responsibilities to objects dynamically and transparently, without affecting other objects, or when extension by subclassing is impractical."
  },
  {
    id: 10,
    name: "Facade",
    category: "Structural",
    description: "Provides a unified interface to a set of interfaces in a subsystem. Defines a higher-level interface that makes the subsystem easier to use.",
    example: "Computer startup sequence, Complex library simplified API",
    details: "Use when you want to provide a simple interface to a complex subsystem, or when there are many dependencies between clients and the implementation classes of an abstraction."
  },
  {
    id: 11,
    name: "Flyweight",
    category: "Structural",
    description: "Uses sharing to support large numbers of fine-grained objects efficiently.",
    example: "Character objects in a word processor, Shared game objects",
    details: "Use when an application uses a large number of objects that have the same or similar state and the objects' state can be made external to reduce memory usage."
  },
  {
    id: 12,
    name: "Proxy",
    category: "Structural",
    description: "Provides a surrogate or placeholder for another object to control access to it.",
    example: "Image loading placeholder, Access control to resources",
    details: "Useful when you need a more versatile or sophisticated reference to an object than a simple pointer, such as for lazy loading, access control, or logging."
  },
  
  // Behavioral Patterns
  {
    id: 13,
    name: "Chain of Responsibility",
    category: "Behavioral",
    description: "Avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chains the receiving objects and passes the request along the chain until an object handles it.",
    example: "Event handling in UI systems, Exception handling in programming languages",
    details: "Use when more than one object may handle a request, and the handler isn't known a priori. The handler should be determined automatically, or you want to issue a request to one of several objects without specifying the receiver explicitly."
  },
  {
    id: 14,
    name: "Command",
    category: "Behavioral",
    description: "Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.",
    example: "Menu items in an application, Macro recording in software",
    details: "Use when you want to parameterize objects with an action to perform, or specify, queue, and execute requests at different times, or support undo, or support logging changes so they can be reapplied in case of a system crash."
  },
  {
    id: 15,
    name: "Interpreter",
    category: "Behavioral",
    description: "Given a language, defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.",
    example: "SQL parsers, Regular expression engines",
    details: "Use when there is a language to interpret and statements in the language can be represented as abstract syntax trees."
  },
  {
    id: 16,
    name: "Iterator",
    category: "Behavioral",
    description: "Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.",
    example: "Traversing a collection, Processing items in a queue",
    details: "Use when you want to access a collection's contents without exposing its internal representation, or you want to support multiple traversals of a collection, or you want to provide a uniform interface for traversing different collections."
  },
  {
    id: 17,
    name: "Mediator",
    category: "Behavioral",
    description: "Defines an object that encapsulates how a set of objects interact. Promotes loose coupling by keeping objects from referring to each other explicitly, allowing you to vary their interaction independently.",
    example: "Air traffic control system, Chat room server",
    details: "Use when a set of objects communicate in well-defined but complex ways, resulting in interdependencies that are unstructured and difficult to understand, or when reusing an object is difficult because it refers to and communicates with many other objects."
  },
  {
    id: 18,
    name: "Memento",
    category: "Behavioral",
    description: "Without violating encapsulation, captures and externalizes an object's internal state so that the object can be restored to this state later.",
    example: "Undo mechanisms, Saving game state",
    details: "Use when a snapshot of an object's state must be saved so that it can be restored to that state later, and when a direct interface to obtaining the state would expose implementation details and break the object's encapsulation."
  },
  {
    id: 19,
    name: "Observer",
    category: "Behavioral",
    description: "Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
    example: "Event handling systems, MVC architecture for UI updates",
    details: "Use when a change to one object requires changing others, and you don't know how many objects need to be changed, or when an object should be able to notify other objects without making assumptions about who these objects are."
  },
  {
    id: 20,
    name: "State",
    category: "Behavioral",
    description: "Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.",
    example: "Vending machine states, TCP connection states",
    details: "Use when an object's behavior depends on its state, and it must change its behavior at run-time depending on that state, or when operations have large, multipart conditional statements that depend on the object's state."
  },
  {
    id: 21,
    name: "Strategy",
    category: "Behavioral",
    description: "Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Lets the algorithm vary independently from clients that use it.",
    example: "Different sorting algorithms, Payment methods in a shopping cart",
    details: "Use when you want to define a class that will have one behavior that is similar to other behaviors in a list, or when you need to use one of several behaviors dynamically, or when you want to avoid exposing complex, algorithm-specific data structures."
  },
  {
    id: 22,
    name: "Template Method",
    category: "Behavioral",
    description: "Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.",
    example: "Document processors with different formats, Build processes in different environments",
    details: "Use when you want to implement the invariant parts of an algorithm once and leave it up to subclasses to implement the behavior that can vary, or when common behavior among subclasses should be factored and localized in a common class to avoid code duplication."
  },
  {
    id: 23,
    name: "Visitor",
    category: "Behavioral",
    description: "Represents an operation to be performed on the elements of an object structure. Lets you define a new operation without changing the classes of the elements on which it operates.",
    example: "Operations on elements of a parser tree, Tax operations on different expense types",
    details: "Use when an object structure contains many classes of objects with differing interfaces, and you want to perform operations on these objects that depend on their concrete classes, or when many distinct and unrelated operations need to be performed on objects in an object structure."
  }
];