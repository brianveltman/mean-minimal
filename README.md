<h1>MEAN-minimal</h1>

A minimal MEAN stack on Ubuntu 14.04.3.

<h2>How to install</h2>
<ul>
<li>Open the command line or terminal</li>
<li>Clone the repo <pre>git clone git@github.com:brianveltman/mean-minimal.git</pre></li>
<li>run <pre>cd mean-minimal && vagrant up</pre></li>
<li>Get some coffee, after ±10min the server is ready for use.</li>
<li>To see if everything works correctly open your browser and go to <a href="http://192.168.33.10:3000">http://192.168.33.10:3000</a></li>
</ul>

<h2>How to access the server</h2>
In your browser go to: http://192.168.33.10:3000

To ssh into the server run: <pre>vagrant ssh</pre> from the project directory.


<h3>Upcoming updates</h3>
<ul>
<li>Livereload for Node.js</li>
<li>Browsersync</li>
</ul>

<h2>Known issues</h2>
<ul>
<li>When you make a change Node.js needs a restart. This is just how node.js works, not a real issue. I will add livereload and browsersync to get around this.</li>
</ul>

<strong>NOTICE</strong><br>
Since this is a minimal MEAN stack no MVC structure and/or build tools will be added. Feel free to fork this repo and add them your self when needed.

