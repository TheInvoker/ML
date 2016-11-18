var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect,
	Perceptron = synaptic.Architect.Perceptron;
	
	/*
var inputLayer = new Layer(2),
    hiddenLayer = new Layer(3),
    outputLayer = new Layer(1);

  inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

var network = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer
});*/

var network = new Perceptron(2, 3, 1);


var trainer = new Trainer(network);

var trainingSet = [{
  input: [0, 0],
  output: [0]
}, {
  input: [0, 1],
  output: [0]
}, {
  input: [1, 0],
  output: [0]
}, {
  input: [1, 1],
  output: [1]
}];

trainer.train(trainingSet, {
  iterations: 1000,
  error: .001
});

var test00 = Math.round(network.activate([0, 0]));
console.log(test00);

var test01 = Math.round(network.activate([0, 1]));
console.log(test01);

var test10 = Math.round(network.activate([1, 0]));
console.log(test10);

var test11 = Math.round(network.activate([1, 1]));
console.log(test11);


