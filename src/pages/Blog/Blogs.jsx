import React from 'react';

const Blogs = () => {
    return (
        <div className="lg:container mx-auto my-10 p-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="card max-w-3xl mx-auto my-4 bg-base-100 shadow">
                    <figure>
                        <img
                            className="h-96 w-full"
                            src="https://i.ibb.co/W35HknC/first.png"
                            alt="Album"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </h2>
                        <p>
                            An access token is a credential that allows a client (e.g., a web or mobile application) to access protected resources on an API or server. It is obtained after successful authentication and authorization from an authorization server. The access token is typically a string that is included in API requests as proof of authentication. It has a limited lifetime and expires after a certain period.

                            On the other hand, a refresh token is a credential used to obtain a new access token when the current one expires. It is issued alongside the access token and has a longer expiration period. The refresh token is securely stored by the client and sent to the authorization server to request a new access token without requiring the user to reauthenticate. This improves the user experience and reduces the risk of exposing sensitive credentials.
                        </p>
                    </div>
                </div>
                <div className="card max-w-3xl mx-auto my-4 bg-base-100 shadow">
                    <figure>
                        <img
                            className="h-96 w-full"
                            src="https://i.ibb.co/PxfRGLP/blog-2.jpg"
                            alt="Album"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Compare SQL and NoSQL databases?
                        </h2>
                        <p>
                            SQL (Structured Query Language) databases use a structured data model with predefined schemas, enforcing data integrity and supporting complex queries. They scale vertically and are ideal for applications with well-defined data relationships. NoSQL (Not Only SQL) databases offer flexible data models, allowing for schema-less and scalable horizontal scaling. They are suitable for handling large-scale, unstructured, and rapidly changing data. NoSQL databases sacrifice some ACID properties for increased scalability and performance. The choice between SQL and NoSQL depends on factors like data structure, scalability requirements, and the complexity of queries.
                        </p>
                    </div>
                </div>
                <div className="card max-w-3xl mx-auto my-4 bg-base-100 shadow">
                    <figure>
                        <img
                            className="h-96 w-full"
                            src="https://i.ibb.co/P13ggKR/blog3.png"
                            alt="Album"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title my-5">
                            What is express js? What is Nest JS ?
                        </h2>
                        <p>
                            Express.js is a popular web application framework for Node.js. It provides a simple and minimalistic approach to building web applications and APIs. Express.js allows developers to handle HTTP requests and responses, define routes, handle middleware, and manage application logic. It is highly flexible and extensible, with a large ecosystem of middleware and plugins available.

                            NestJS, on the other hand, is a progressive, extensible, and TypeScript-based framework for building scalable and maintainable server-side applications. NestJS takes inspiration from Angular and applies its modular structure and dependency injection system to backend development. It provides a solid foundation for building enterprise-grade applications by offering features like dependency injection, decorators, modules, controllers, and middleware. NestJS is built on top of Express.js, allowing developers to leverage the power of Express while benefiting from the structure and organization provided by NestJS.
                        </p>
                    </div>
                </div>
                <div className="card max-w-3xl mx-auto my-4 bg-base-100 shadow">
                    <figure>
                        <img
                            className="h-96 w-full"
                            src="https://i.ibb.co/z8jKqL2/mongo.webp"
                            alt="Album"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            What is MongoDB aggregate and how does it work?
                        </h2>
                        <p>
                            In MongoDB, the aggregate operation is used for performing advanced data analysis and transformations on data stored in collections. It allows you to process data through a series of stages, where each stage performs a specific operation on the data and passes the transformed data to the next stage.

                            The aggregate pipeline consists of various stages like $match, $group, $project, $sort, $limit, $skip, $lookup, and more. These stages can be combined in different ways to achieve the desired results.

                            For example, you can use the $match stage to filter documents based on specific criteria, the $group stage to group documents and perform aggregation operations like sum, average, count, etc., and the $project stage to reshape the output by including or excluding specific fields.

                            The aggregate operation is highly flexible and can handle complex data transformations and calculations. It allows you to leverage MongoDB's powerful query and aggregation capabilities to process and analyze your data efficiently.

                            By using the aggregate operation, you can perform data aggregations, statistical calculations, data transformations, and more, making it a valuable tool for extracting valuable insights from your MongoDB collections.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;