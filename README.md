# Example

Pre-reqs:
1. Install Zeromq
2. Install Node > 6
3. `npm i`
4. Run the publisher (publishes updates through zmq every 5 seconds)
`npm run publisher`

To proxy updates via node.js, in a seperate terminal (subscribed to events):
1. `npm start`

For dev:
1. `npm i -g nodemon`
2. `npm run dev`

Visit localhost:3000 to get updates.
