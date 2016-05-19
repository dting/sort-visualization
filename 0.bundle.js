webpackJsonp([0],{647:function(s,n){s.exports={title:"Bogo Sort",html:'<h4>Code</h4>\n<pre class="hljs"><code><span class="hljs-keyword">const</span> isSorted = arr =&gt; {\n  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; arr.length - <span class="hljs-number">1</span>; i++) {\n    <span class="hljs-keyword">if</span> (arr[i] &gt; arr[i+<span class="hljs-number">1</span>]) {\n      <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;\n    }\n  }\n  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;\n}\n\n<span class="hljs-keyword">const</span> bogoSort = arr =&gt; {\n  <span class="hljs-keyword">while</span> (!isSorted(arr)) {\n    shuffle(arr);\n  }\n};\n</code></pre>\n<h4>Notes</h4>\n<pre class="hljs"><code><span class="hljs-attribute">Time</span>:\n    <span class="hljs-attribute">Worst </span>: Unbounded\n  <span class="hljs-attribute">Average </span>: O(n * n!)\n     <span class="hljs-attribute">Best </span>: O(n)\n\n<span class="hljs-attribute">Space</span>: O(<span class="hljs-number">1</span>)\n</code></pre>\n'}},648:function(s,n){s.exports={title:"Bubble Sort",html:'<h4>Code</h4>\n<pre class="hljs"><code><span class="hljs-keyword">const</span> bubbleSort = arr =&gt; {\n  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = arr.length - <span class="hljs-number">1</span>, count = <span class="hljs-number">1</span>; i &gt; <span class="hljs-number">0</span> &amp;&amp; count; i--) {\n    count = <span class="hljs-number">0</span>;\n    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> j = <span class="hljs-number">0</span>; j &lt; i; j++) {\n      <span class="hljs-keyword">if</span> (arr[j] &gt; arr[j + <span class="hljs-number">1</span>]) {\n        swap(arr, j, j + <span class="hljs-number">1</span>);\n        count++;\n      }\n    }\n  }\n};\n</code></pre>\n<h4>Notes</h4>\n<pre class="hljs"><code><span class="hljs-attribute">Time</span>:\n    <span class="hljs-attribute">Worst </span>: O(n^<span class="hljs-number">2</span>)\n  <span class="hljs-attribute">Average </span>: O(n^<span class="hljs-number">2</span>)\n     <span class="hljs-attribute">Best </span>: O(n)\n\n<span class="hljs-attribute">Space</span>: O(<span class="hljs-number">1</span>)\n</code></pre>\n'}},650:function(s,n){s.exports={title:"Insertion Sort",html:'<h4>Code</h4>\n<pre class="hljs"><code><span class="hljs-keyword">const</span> insertionSort = arr =&gt; {\n  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">1</span>; i &lt; arr.length; i++) {\n    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> j = i; j &gt; <span class="hljs-number">0</span> &amp;&amp; arr[j] &lt; arr[j - <span class="hljs-number">1</span>]; j--) {\n      swap(arr, j, j - <span class="hljs-number">1</span>);\n    }\n  }\n};\n</code></pre>\n<h4>Notes</h4>\n<pre class="hljs"><code><span class="hljs-attribute">Time</span>:\n    <span class="hljs-attribute">Worst </span>: O(n^<span class="hljs-number">2</span>)\n  <span class="hljs-attribute">Average </span>: O(n^<span class="hljs-number">2</span>)\n     <span class="hljs-attribute">Best </span>: O(n)\n\n<span class="hljs-attribute">Space</span>: O(<span class="hljs-number">1</span>)\n</code></pre>\n'}},652:function(s,n){s.exports={title:"Quick Sort",html:'<h4>Code</h4>\n<pre class="hljs"><code><span class="hljs-keyword">const</span> partition = (arr, l, h) =&gt; {\n  swap(arr, random(l, h), h);\n  <span class="hljs-keyword">const</span> pivot = arr[h];\n  <span class="hljs-keyword">let</span> i = l;\n  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> j = l; j &lt; h; j++) {\n    <span class="hljs-keyword">if</span> (arr[j] &lt;= pivot) {\n      swap(arr, i, j);\n      i++;\n    }\n  }\n  swap(arr, i, h);\n  <span class="hljs-keyword">return</span> i;\n};\n\n<span class="hljs-keyword">const</span> quickSort = (arr, l=<span class="hljs-number">0</span>, h=arr.length<span class="hljs-number">-1</span>) =&gt; {\n  <span class="hljs-keyword">if</span> (l &lt; h) {\n    <span class="hljs-keyword">const</span> p = partition(arr, l, h);\n    quickSort(arr, l, p - <span class="hljs-number">1</span>);\n    quickSort(arr, p + <span class="hljs-number">1</span>, h);\n  }\n};\n</code></pre>\n<h4>Notes</h4>\n<pre class="hljs"><code>Time:\n    Worst : O(<span class="hljs-keyword">n</span>^2)\n  Average : O(<span class="hljs-keyword">n</span> <span class="hljs-built_in">log</span>(<span class="hljs-keyword">n</span>))\n     Best : O(<span class="hljs-keyword">n</span> <span class="hljs-built_in">log</span>(<span class="hljs-keyword">n</span>))\n\nSpace: O(<span class="hljs-built_in">log</span>(<span class="hljs-keyword">n</span>))\n</code></pre>\n'}},653:function(s,n){s.exports={title:"Selection Sort",html:'<h4>Code</h4>\n<pre class="hljs"><code><span class="hljs-keyword">const</span> selectionSort = arr =&gt; {\n  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; arr.length; i++) {\n    <span class="hljs-keyword">let</span> smallest = arr[i];\n    <span class="hljs-keyword">let</span> smallestIndex = i;\n    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> j = i + <span class="hljs-number">1</span>; j &lt; arr.length; j++) {\n      <span class="hljs-keyword">if</span> (arr[j] &lt;= smallest) {\n        smallest = arr[j];\n        smallestIndex = j;\n      }\n    }\n    swap(arr, smallestIndex, i);\n  }\n};\n</code></pre>\n<h4>Notes</h4>\n<pre class="hljs"><code><span class="hljs-attribute">Time</span>:\n    <span class="hljs-attribute">Worst </span>: O(n^<span class="hljs-number">2</span>)\n  <span class="hljs-attribute">Average </span>: O(n^<span class="hljs-number">2</span>)\n     <span class="hljs-attribute">Best </span>: O(n^<span class="hljs-number">2</span>)\n\n<span class="hljs-attribute">Space</span>: O(<span class="hljs-number">1</span>)\n</code></pre>\n'}}});