import React from "react";

const Blogs = () => {
  return (
    <div >
      <section className=" bg-gray-800  text-gray-100 pt-10 pb-28">
        <div className=" max-w-3xl mx-auto mb-16  py-10 flex flex-col justify-center px-4 py-10 mx-auto  md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Blogs on node and javascript
          </h2>
          <p className="mt-4 mb-8  text-gray-400">
           Some Questions are answered bellow
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What are the difference between SQL and NoSQL?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL. SQLdatabases have fixed or static or predefined
                schema. NoSQL have dynamic schema, SQL vertically scalable and
                NoSQL horizontally scalable{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is JWT, and how does it work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
                <br/>
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is the difference between javascript and NodeJS?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">
              JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
              <br/>
              Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS.Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.
              {" "}

              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does NodeJS handle multiple requests at the same time?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">
              NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
              <br/>
              If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
              {" "}

              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
