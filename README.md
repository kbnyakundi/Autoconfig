<img src="internals/img/erb-banner.png" width="100%" />

<br>

<div align="center">

<img src="./internals/img/autoconfig.png">

</div>

<h2> Note: This repo is still in development!! </h2>
<h4> Please come back soon if you're looking for a fully developed version</h4>

An Electron application that allows users to quickly set up development environments. It is based off of Electron React Boilerplate which uses <a href="http://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/redux">Redux</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="http://webpack.github.io/docs/">Webpack</a> and <a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a> for rapid application development (HMR).

The electron app works with Ansible to set up enviornments swiftly with the click of a button.

</p>

## Install

- **Please check out the original project](https://github.com/electron-react-boilerplate/electron-react-boilerplate/)**

First, clone the repo via git:

```bash
git clone https://github.com/kbnyakundi/Autoconfig.git your-project-name
```

And then install the dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
$ yarn package
```
