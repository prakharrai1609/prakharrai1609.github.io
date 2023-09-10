export const experience = [
  {
    date: "02-2023 - Present",
    companyName: "SWE @ Physics Wallah",
    list: [
      `I'm working on the <b>end-to-end</b> backend service of nugget-o-verse where we are building a holistic and personlised learning experience for a student to cater the entire learning cycle.`,
      `Developed and deployed the service, focusing on optimisation for a large user base exceeding <b>10 million+ users.</b>`
    ]
  },
  {
    date: "09-2022 - 02-2023",
    companyName: "SDE @ Interview Kickstart",
    list: [
      `Developed a history panel within the <b>Global Calendar</b> app to track and log changes made to classes, including user details. Also implemented a <b>comprehensive logger</b> to track all modifications made to instructor's details.`,
      `<b>OpenAI</b>: Integrated and implemented all OpenAI REST APIs from scratch, seamlessly integrating them into the existing codebase. Developed a platform which generated over <b>3000+ articles</b>.`
    ]
  },
  {
    date: "06-2022 - 07-2022",
    companyName: "SWE Internship @ Cisco",
    list: [
      `<b>Remote Console Access - RCA</b>: Collaborated with the ”Mass Scale Infrastructure” team to implement a Proof of
      Concept (POC) for a feature called ”Remote Console Access,” enabling remote access and data erasure for routers.`,
      `Created bash scripts and C programs to facilitate the transmission of ”data packets” to specified locations. Developed an
      automation script for batch processing, utilizing L2 forwarding.`,
      `Implemented the <b>UART protocol using multithreading in C</b> to establish communication and exchange data packets
      between the routers.`
    ]
  },
  {
    date: "01-2020 - 03-2022",
    companyName: "Algorithms educator",
    list: [
      `Taught college students the subject data structures and alorithms.`,
    ]
  }
];

export const homePageText = [
  "I'm a CS engineer passionate about System Design, Operating Systems, Databases & Algorithms.",
  `I've previously worked with "Cisco" and "Interview Kickstart". Currently I'm working with "Physics Wallah" where I'm working on "Nugget-o-verse" to create a personalized & well structured learning experience for students.`,
  // "I've completed my B.Tech in Computer Science Engineering in 2023.",
];

export const blogs = [
  {
    "heading": "Database Engineering",
    "blogList": [
      {
        "title": "Demystifying Database Indexing with Go",
        "slug": "demystifying-database-indexing-with-go"
      }
    ]
  },
  {
    "heading": "This is heading 2",
    "blogList": [
      {
        "title": "Advanced data structures"
      }
    ]
  }
]

export const blogList = [
  `
  <h1 id="demystifying-database-indexing-with-go">Demystifying Database Indexing with Go</h1>
<p>Databases are the backbone of modern applications, and optimizing their performance is a critical aspect of software development. One of the key tools in this optimization toolkit is indexing. In this blog post, we&#39;ll explore what indexes are, why they are important, and how to implement basic indexing in a Go application.</p>
<h2 id="understanding-indexes">Understanding Indexes</h2>
<p>Imagine a library with thousands of books. Finding a specific book would be a nightmare if the books were randomly scattered on shelves with no order. To make it efficient, librarians use a catalog, which is essentially an index of the books, organized by title, author, subject, and so on. This catalog guides readers to the exact location of a book, significantly speeding up the search process.</p>
<p>In the database world, an index serves a similar purpose. It&#39;s a data structure that helps the database management system (DBMS) quickly locate and retrieve specific rows from a table. Without indexes, the DBMS would need to scan the entire table to find the desired data, which is highly inefficient, especially with large datasets.</p>
<h2 id="why-are-indexes-important-">Why Are Indexes Important?</h2>
<p>Indexes are crucial for several reasons:</p>
<ol>
<li><p><strong>Faster Data Retrieval</strong>: With indexes, you can retrieve data much faster, even from tables containing millions of records.</p>
</li>
<li><p><strong>Reduced I/O Operations</strong>: Indexes reduce the number of I/O operations, as the DBMS doesn&#39;t have to scan the entire table. This results in better performance and lower resource consumption.</p>
</li>
<li><p><strong>Enforced Uniqueness</strong>: Indexes can enforce the uniqueness of values in one or more columns, ensuring data integrity.</p>
</li>
<li><p><strong>Optimized Sorting</strong>: Indexes can accelerate sorting operations, such as ORDER BY clauses in SQL queries.</p>
</li>
</ol>
<h2 id="basic-indexing-in-go">Basic Indexing in Go</h2>
<p>Now, let&#39;s dive into implementing basic indexing in a Go application using the popular database library, <a href="https://gorm.io/">GORM</a>.</p>
<h3 id="setting-up-the-environment">Setting Up the Environment</h3>
<p>Before we start coding, make sure you have Go and GORM installed. You can install GORM using the following command:</p>
<pre><code class="lang-bash"><span class="hljs-built_in">go</span> <span class="hljs-built_in">get</span> -u gorm.io/gorm
</code></pre>
<p>Next, we&#39;ll create a simple SQLite database for our example. Create a file named <code>main.go</code> and add the following code:</p>
<pre><code class="lang-go">package main

import (
    <span class="hljs-string">"gorm.io/driver/sqlite"</span>
    <span class="hljs-string">"gorm.io/gorm"</span>
    <span class="hljs-string">"log"</span>
)

<span class="hljs-keyword">type</span> Product struct {
    ID    uint
    Code  <span class="hljs-built_in">string</span>
    Price uint
}

func main() {
    <span class="hljs-comment">// Connect to the SQLite database</span>
    <span class="hljs-keyword">db</span>, <span class="hljs-keyword">err</span> := gorm.<span class="hljs-keyword">Open</span>(sqlite.<span class="hljs-keyword">Open</span>(<span class="hljs-string">"test.db"</span>), &amp;gorm.Config{})
    <span class="hljs-keyword">if</span> <span class="hljs-keyword">err</span> != nil {
        <span class="hljs-keyword">log</span>.Fatal(<span class="hljs-string">"Failed to connect to database:"</span>, <span class="hljs-keyword">err</span>)
    }
    defer <span class="hljs-keyword">db</span>.<span class="hljs-keyword">Close</span>()

    <span class="hljs-comment">// AutoMigrate creates the "products" table and applies migrations</span>
    <span class="hljs-keyword">db</span>.AutoMigrate(&amp;Product{})

    <span class="hljs-comment">// Create records</span>
    <span class="hljs-keyword">db</span>.Create(&amp;Product{Code: <span class="hljs-string">"A123"</span>, Price: 1000})
    <span class="hljs-keyword">db</span>.Create(&amp;Product{Code: <span class="hljs-string">"B456"</span>, Price: 2000})
    <span class="hljs-keyword">db</span>.Create(&amp;Product{Code: <span class="hljs-string">"C789"</span>, Price: 3000})

    <span class="hljs-comment">// Create an index on the "code" column</span>
    <span class="hljs-keyword">db</span>.Exec(<span class="hljs-string">"CREATE INDEX idx_code ON products(code)"</span>)

    <span class="hljs-comment">// Retrieve data using the index</span>
    <span class="hljs-keyword">var</span> product Product
    <span class="hljs-keyword">db</span>.First(&amp;product, <span class="hljs-string">"code = ?"</span>, <span class="hljs-string">"A123"</span>)
    <span class="hljs-keyword">log</span>.Printf(<span class="hljs-string">"Product found: %+v\n"</span>, product)
}
</code></pre>
<p>In this code:</p>
<ul>
<li>We define a <code>Product</code> struct to represent our data model.</li>
<li>We set up a SQLite database connection using GORM.</li>
<li>We use <code>db.AutoMigrate</code> to create the &quot;products&quot; table.</li>
<li>We create some sample records.</li>
<li>We create an index on the &quot;code&quot; column using the <code>db.Exec</code> method.</li>
<li>Finally, we retrieve a record using the index.</li>
</ul>
<h3 id="running-the-code">Running the Code</h3>
<p>To run the code, execute the following command in your terminal:</p>
<pre><code class="lang-bash">go <span class="hljs-keyword">run</span><span class="bash"> main.go</span>
</code></pre>
<p>You should see the following output:</p>
<pre><code><span class="hljs-selector-tag">Product</span> <span class="hljs-selector-tag">found</span>: {<span class="hljs-attribute">ID</span>:<span class="hljs-number">1</span> Code:A123 Price:<span class="hljs-number">1000</span>}
</code></pre><p>Congratulations! You&#39;ve successfully implemented basic indexing in a Go application.</p>
<h2 id="conclusion">Conclusion</h2>
<p>Indexes are essential tools for optimizing database performance. In this blog post, we&#39;ve explored what indexes are, why they are important, and how to implement basic indexing in a Go application using GORM. By utilizing indexes wisely, you can significantly improve the efficiency and speed of your database queries, making your applications more responsive and scalable.</p>

  `
];