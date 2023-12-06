# Notification system
This project is a temperature monitoring and notification system designed to alert users when the refrigerator temperature exceeds specified limits. It utilizes Node-RED, a flow-based programming tool built on Node.js, to simplify the creation, deployment, and management of your temperature monitoring system.

## Installation

Use the package manager npm.

```bash
git clone https://github.com/artemkuskin/node-red-progect.git
```

## Usage
``
1.node-red-frow
``

This file includes the Node-RED flow configuration. Import this file into your Node-RED instance to set up the temperature monitoring flow.

``
2.node-server
``

The  folder contains the Node.js server code. Run this server to handle temperature sensor data and provide necessary services.
```bash
npm start
```

``
3.temperature-sensor
``

This custom node is a temperature sensor for monitoring the refrigerator in the Node-RED system. The node collects temperature data and transmits it to your stream for further processing and notifications.

To use this node, you need to install it in the node-red configuration
```bash
// node-red

npm install ~/<The path to the node>
```
