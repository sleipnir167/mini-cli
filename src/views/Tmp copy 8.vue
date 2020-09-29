<template>
  <v-app id="inspire">

<ul id="acc" class="leftmenu">
	<li>
		<p>アコーディオンメニュー</p>
		<ul>
			<li>見出しをクリックすると内容の詳細が表示されます</li>
		</ul>
	</li>
	<li>
		<p>使い方</p>
		<ul>
			<li>クリックすると開いたり、閉じたりします</li>
		</ul>
	</li>
	<li>
		<p>入れ子もできます</p>
		<ul>
			<li><template>
  <div class="container">
    <div class="row">
      <div class="col s7 m7" v-for="post in posts" v-bind:key="post.id">
        <div class="card">
          <div class="card-image">
            <img :src="post.image.url"/>
          </div>
          <div class="card-content" v-on:click="toggleShowPost">
            <div class="card-title">
              {{post.title}}
            </div>
            <div class="card-more">
              <div v-if="show">
                <font-awesome-icon icon="angle-up" size="lg"/>
              </div>
              <div v-else>
                <font-awesome-icon icon="angle-down" size="lg"/>
              </div>
            </div>
          </div>
          <div class="card-detail" v-show="show">
            {{post.content}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'PostHome',
    data: function() {
      return{
        posts: [],
        show: false
      }
    },
    mounted: function(){
      this.fetchPosts();
    },
    methods: {
      fetchPosts(){
        axios.get(`api/v1/posts`).then(res => {
          for(var i = 0; i < res.data.posts.length; i++) {
            this.posts.push(res.data.posts[i]);
          }
        }, (error) => {
          console.log(error);
        });
      },
      toggleShowPost(){
        this.show = !this.show
      }
    }
  }
</script>
				<p class="p2">その１</p>
				<ul>
					<li>入れ子のテストです</li>
				</ul>
			</li>
			<li>
				<p class="p2">その２</p>
				<ul>
					<li>入れ子のテスト２です</li>
				</ul>
			</li>

		</ul>
	</li>


</ul>


    <div style="background-color:red">aaaaaaaaaaa</div>

      
<details>
  <summary>
    <span>H101</span>
    <span>
      <tr>
        <th colspan="1" class="platformtype"></th>
        <th colspan="1" class="platformtype" id="desktop-header" style="background: #fff4c3">Desktop browsers</th>
        <th colspan="1" class="platformtype" id="engine-header" style="background: #f8e8a0">Servers/runtimes</th>
        <th colspan="1" class="platformtype" id="mobile-header" style="background: #f8daa0">Mobile</th>
      </tr>
    </span>
  </summary>
    <table id="table-wrapper">
      <tr>
        <th colspan="1" class="platformtype"></th>
        <th colspan="1" class="platformtype" id="desktop-header" style="background: #fff4c3">Desktop browsers</th>
        <th colspan="1" class="platformtype" id="engine-header" style="background: #f8e8a0">Servers/runtimes</th>
        <th colspan="1" class="platformtype" id="mobile-header" style="background: #f8daa0">Mobile</th>
      </tr>
      <tr>
        <th colspan="1" class="platformtype"></th>
        <th colspan="1" class="platformtype" id="desktop-header" style="background: #fff4c3">Desktop browsers</th>
        <th colspan="1" class="platformtype" id="engine-header" style="background: #f8e8a0">Servers/runtimes</th>
        <th colspan="1" class="platformtype" id="mobile-header" style="background: #f8daa0">Mobile</th>
      </tr>
      <tr>
        <th colspan="1" class="platformtype"></th>
        <th colspan="1" class="platformtype" id="desktop-header" style="background: #fff4c3">Desktop browsers</th>
        <th colspan="1" class="platformtype" id="engine-header" style="background: #f8e8a0">Servers/runtimes</th>
        <th colspan="1" class="platformtype" id="mobile-header" style="background: #f8daa0">Mobile</th>
      </tr>
    </table>
  </details>

<details>
  <summary>
    H101
  </summary>
  ラーメンとは、中華麺とスープを主とし、様々な具を組み合わせた麺料理。漢字表記は拉麺、老麺または柳麺。別名は中華そばおよび支那そば、南京そばなどである。中華人民共和国や中華民国では日式拉麺または日本拉麺と呼ばれる。
</details>
<details>
  <summary>焼肉</summary>
  焼肉とは、牛・豚などの肉を焼いたもの。また、肉や内臓にタレをつけ、直火で焼きながら食べる料理である。
</details>
<details>
  <summary>寿司</summary>
  寿司とは、米飯と主に魚介類を組み合わせた日本料理である。 大別すると、酢飯と生鮮魚介を用いた「早鮨」と、魚介類を飯と塩で乳酸発酵させた「なれ鮨」に区分される。
</details>

    <div class="controls">
      <label for="sort">
        Sort by
        <select id="sort">
          <option value="engine-types">Engine types</option>
          <option value="features">Features</option>
          <option value="flagged-features">Flagged features</option>
        </select>
      </label>

      <label for="show-obsolete">
        Show obsolete platforms
        <input id="show-obsolete" type="checkbox">
      </label>

      <label for="show-unstable">
        Show unstable platforms
        <input id="show-unstable" type="checkbox" checked>
      </label>
    </div>

    <div class="legend">
      <span><span class="swatch" style="background-color:hsla(79, 100%, 37%, .8)"></span>V8</span>
      <span><span class="swatch" style="background-color:hsla(35, 100%, 50%, .8)"></span>SpiderMonkey</span>
      <span><span class="swatch" style="background-color:hsla(220, 25%, 70%, .8)"></span>JavaScriptCore</span>
      <span><span class="swatch" style="background-color:hsla(217, 85%, 54%, .8)"></span>Chakra</span>
      <span><span class="swatch" style="background-color:hsla(358, 86%, 43%, .8)"></span>Carakan</span>
      <span><span class="swatch" style="background-color:hsla(52, 85%, 63%, .8)"></span>Other</span>
    </div>




    <table id="table-wrapper">
      <thead>
        <tr>
          <th colspan="3" class="platformtype"></th>
          <th colspan="17" class="platformtype" id="desktop-header" style="background: #fff4c3">Desktop browsers</th>
          <th colspan="5" class="platformtype" id="engine-header" style="background: #f8e8a0">Servers/runtimes</th>
          <th colspan="2" class="platformtype" id="mobile-header" style="background: #f8daa0">Mobile</th>
        </tr>

        <tr>
          <th class="test-name">Feature name</th>
          <th class="current">Current browser</th>
          <th>
        </th>

          <!-- TABLE HEADERS -->
        <th class="platform ie8 desktop obsolete" data-browser="ie8"><a href="#ie8" class="browser-name"><abbr title="Internet Explorer 8">IE 8</abbr></a></th>
        <th class="platform ie9 desktop obsolete" data-browser="ie9"><a href="#ie9" class="browser-name"><abbr title="Internet Explorer 9">IE 9</abbr></a></th>
        <th class="platform ie10 desktop obsolete" data-browser="ie10"><a href="#ie10" class="browser-name"><abbr title="Internet Explorer 10">IE 10</abbr></a></th>
        <th class="platform ie11 desktop" data-browser="ie11"><a href="#ie11" class="browser-name"><abbr title="Internet Explorer 11">IE 11</abbr></a></th>
        <th class="platform firefox68 desktop obsolete" data-browser="firefox68"><a href="#firefox68" class="browser-name"><abbr title="Firefox 68 Extended Support Release">FF 68 ESR</abbr></a></th>
        <th class="platform firefox69 desktop obsolete" data-browser="firefox69"><a href="#firefox69" class="browser-name"><abbr title="Firefox 69">FF 69</abbr></a></th>
        <th class="platform firefox70 desktop obsolete" data-browser="firefox70"><a href="#firefox70" class="browser-name"><abbr title="Firefox 70">FF 70</abbr></a></th>
        <th class="platform firefox71 desktop obsolete" data-browser="firefox71"><a href="#firefox71" class="browser-name"><abbr title="Firefox 71">FF 71</abbr></a></th>
        <th class="platform firefox72 desktop obsolete" data-browser="firefox72"><a href="#firefox72" class="browser-name"><abbr title="Firefox 72">FF 72</abbr></a></th>
        <th class="platform firefox73 desktop obsolete" data-browser="firefox73"><a href="#firefox73" class="browser-name"><abbr title="Firefox 73">FF 73</abbr></a></th>
        <th class="platform firefox74 desktop obsolete" data-browser="firefox74"><a href="#firefox74" class="browser-name"><abbr title="Firefox 74">FF 74</abbr></a></th>
        <th class="platform firefox75 desktop obsolete" data-browser="firefox75"><a href="#firefox75" class="browser-name"><abbr title="Firefox 75">FF 75</abbr></a></th>
        <th class="platform firefox76 desktop obsolete" data-browser="firefox76"><a href="#firefox76" class="browser-name"><abbr title="Firefox 76">FF 76</abbr></a></th>
        <th class="platform firefox77 desktop obsolete" data-browser="firefox77"><a href="#firefox77" class="browser-name"><abbr title="Firefox 77">FF 77</abbr></a></th>
        <th class="platform firefox78 desktop" data-browser="firefox78"><a href="#firefox78" class="browser-name"><abbr title="Firefox 78 Extended Support Release">FF 78 ESR</abbr></a></th>
        <th class="platform firefox79 desktop obsolete" data-browser="firefox79"><a href="#firefox79" class="browser-name"><abbr title="Firefox 79">FF 79</abbr></a></th>
        <th class="platform firefox80 desktop" data-browser="firefox80"><a href="#firefox80" class="browser-name"><abbr title="Firefox 80">FF 80</abbr></a></th>
        <th class="platform firefox81 desktop" data-browser="firefox81"><a href="#firefox81" class="browser-name"><abbr title="Firefox 81">FF 81</abbr></a></th>
        <th class="platform firefox82 desktop unstable" data-browser="firefox82"><a href="#firefox82" class="browser-name"><abbr title="Firefox 82 Beta">FF 82 Beta</abbr></a></th>
        <th class="platform firefox83 desktop unstable" data-browser="firefox83"><a href="#firefox83" class="browser-name"><abbr title="Firefox 83 Nightly">FF 83 Nightly</abbr></a></th>
        <th class="platform opera12_10 desktop obsolete" data-browser="opera12_10"><a href="#opera12_10" class="browser-name"><abbr title="Opera 12.10">OP 12.10</abbr></a></th>
        <th class="platform chrome77 desktop obsolete" data-browser="chrome77"><a href="#chrome77" class="browser-name"><abbr title="Chrome 77">CH 77</abbr></a></th>
        <th class="platform chrome78 desktop obsolete" data-browser="chrome78"><a href="#chrome78" class="browser-name"><abbr title="Chrome 78">CH 78</abbr></a></th>
        <th class="platform chrome79 desktop obsolete" data-browser="chrome79"><a href="#chrome79" class="browser-name"><abbr title="Chrome 79">CH 79</abbr></a></th>
        <th class="platform chrome80 desktop obsolete" data-browser="chrome80"><a href="#chrome80" class="browser-name"><abbr title="Chrome 80">CH 80</abbr></a></th>
        <th class="platform chrome81 desktop obsolete" data-browser="chrome81"><a href="#chrome81" class="browser-name"><abbr title="Chrome 81">CH 81</abbr></a></th>
        <th class="platform chrome83 desktop obsolete" data-browser="chrome83"><a href="#chrome83" class="browser-name"><abbr title="Chrome 83">CH 83</abbr></a></th>
        <th class="platform chrome84 desktop" data-browser="chrome84"><a href="#chrome84" class="browser-name"><abbr title="Chrome 84">CH 84</abbr></a></th>
        <th class="platform chrome85 desktop" data-browser="chrome85"><a href="#chrome85" class="browser-name"><abbr title="Chrome 85">CH 85</abbr></a></th>
        <th class="platform chrome86 desktop unstable" data-browser="chrome86"><a href="#chrome86" class="browser-name"><abbr title="Chrome 86 Beta">CH 86</abbr></a></th>
        <th class="platform chrome87 desktop unstable" data-browser="chrome87"><a href="#chrome87" class="browser-name"><abbr title="Chrome 87 Canary">CH 87</abbr></a></th>
        <th class="platform edge17 desktop obsolete" data-browser="edge17"><a href="#edge17" class="browser-name"><abbr title="Microsoft Edge 17">Edge 17</abbr></a></th>
        <th class="platform edge18 desktop" data-browser="edge18"><a href="#edge18" class="browser-name"><abbr title="Microsoft Edge 18">Edge 18</abbr></a></th>
        <th class="platform edge79 desktop obsolete" data-browser="edge79"><a href="#edge79" class="browser-name"><abbr title="Microsoft Edge 79">Edge 79</abbr></a></th>
        <th class="platform edge80 desktop obsolete" data-browser="edge80"><a href="#edge80" class="browser-name"><abbr title="Microsoft Edge 80">Edge 80</abbr></a></th>
        <th class="platform edge81 desktop obsolete" data-browser="edge81"><a href="#edge81" class="browser-name"><abbr title="Microsoft Edge 81">Edge 81</abbr></a></th>
        <th class="platform edge83 desktop" data-browser="edge83"><a href="#edge83" class="browser-name"><abbr title="Microsoft Edge 83">Edge 83</abbr></a></th>
        <th class="platform edge84 desktop" data-browser="edge84"><a href="#edge84" class="browser-name"><abbr title="Microsoft Edge 84">Edge 84</abbr></a></th>
        <th class="platform safari12 desktop obsolete" data-browser="safari12"><a href="#safari12" class="browser-name"><abbr title="Safari 12">SF 12</abbr></a></th>
        <th class="platform safari12_1 desktop obsolete" data-browser="safari12_1"><a href="#safari12_1" class="browser-name"><abbr title="Safari 12.1">SF&#xA0;12.1</abbr></a></th>
        <th class="platform safari13 desktop obsolete" data-browser="safari13"><a href="#safari13" class="browser-name"><abbr title="Safari 13">SF&#xA0;13</abbr></a></th>
        <th class="platform safari13_1 desktop" data-browser="safari13_1"><a href="#safari13_1" class="browser-name"><abbr title="Safari 13.1">SF&#xA0;13.1</abbr></a></th>
        <th class="platform safari14 desktop" data-browser="safari14"><a href="#safari14" class="browser-name"><abbr title="Safari 14">SF&#xA0;14</abbr></a></th>
        <th class="platform safaritp desktop unstable" data-browser="safaritp"><a href="#safaritp" class="browser-name"><abbr title="Safari Technology Preview Release 106">SF TP</abbr></a></th>
        <th class="platform webkit desktop unstable" data-browser="webkit"><a href="#webkit" class="browser-name"><abbr title="Webkit r222556 (October 4, 2017)">WK</abbr></a></th>
        <th class="platform opera63 desktop obsolete" data-browser="opera63"><a href="#opera63" class="browser-name"><abbr title="Opera 63">OP 63</abbr></a></th>
        <th class="platform opera64 desktop obsolete" data-browser="opera64"><a href="#opera64" class="browser-name"><abbr title="Opera 64">OP 64</abbr></a></th>
        <th class="platform opera65 desktop obsolete" data-browser="opera65"><a href="#opera65" class="browser-name"><abbr title="Opera 65">OP 65</abbr></a></th>
        <th class="platform opera66 desktop obsolete" data-browser="opera66"><a href="#opera66" class="browser-name"><abbr title="Opera 66">OP 66</abbr></a></th>
        <th class="platform opera67 desktop obsolete" data-browser="opera67"><a href="#opera67" class="browser-name"><abbr title="Opera 67">OP 67</abbr></a></th>
        <th class="platform opera68 desktop obsolete" data-browser="opera68"><a href="#opera68" class="browser-name"><abbr title="Opera 68">OP 68</abbr></a></th>
        <th class="platform opera69 desktop" data-browser="opera69"><a href="#opera69" class="browser-name"><abbr title="Opera 69">OP 69</abbr></a></th>
        <th class="platform opera70 desktop" data-browser="opera70"><a href="#opera70" class="browser-name"><abbr title="Opera 70">OP 70</abbr></a></th>
        <th class="platform phantom2_1 engine obsolete" data-browser="phantom2_1"><a href="#phantom2_1" class="browser-name"><abbr title="PhantomJS 2.1">PJS</abbr></a></th>
        <th class="platform node0_10 engine obsolete" data-browser="node0_10"><a href="#node0_10" class="browser-name"><abbr title="Node.js">Node 0.10</abbr></a><a href="#harmony-flag-old-note"><sup>[1]</sup></a></th>
        <th class="platform node0_12 engine obsolete" data-browser="node0_12"><a href="#node0_12" class="browser-name"><abbr title="Node.js">Node 0.12</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node4 engine obsolete" data-browser="node4"><a href="#node4" class="browser-name"><abbr title="Node.js">Node 4</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node6_5 engine obsolete" data-browser="node6_5"><a href="#node6_5" class="browser-name"><abbr title="Node.js">Node &gt;=6.5 &lt;7</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node7 engine obsolete" data-browser="node7"><a href="#node7" class="browser-name"><abbr title="Node.js">Node 7.0-7.5</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node7_6 engine obsolete" data-browser="node7_6"><a href="#node7_6" class="browser-name"><abbr title="Node.js">Node &gt;=7.6 &lt;8</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node8 engine obsolete" data-browser="node8"><a href="#node8" class="browser-name"><abbr title="Node.js">Node &gt;=8.0 &lt;8.3</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node8_3 engine obsolete" data-browser="node8_3"><a href="#node8_3" class="browser-name"><abbr title="Node.js">Node &gt;=8.3 &lt;8.7</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node8_7 engine obsolete" data-browser="node8_7"><a href="#node8_7" class="browser-name"><abbr title="Node.js">Node &gt;=8.7 &lt;8.10</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node8_10 engine" data-browser="node8_10"><a href="#node8_10" class="browser-name"><abbr title="Node.js">Node &gt;=8.10 &lt;9</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node10_0 engine obsolete" data-browser="node10_0"><a href="#node10_0" class="browser-name"><abbr title="Node.js">Node &gt;=10.0 &lt;10.4</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node10_4 engine obsolete" data-browser="node10_4"><a href="#node10_4" class="browser-name"><abbr title="Node.js">Node &gt;=10.4 &lt;10.9</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node10_9 engine" data-browser="node10_9"><a href="#node10_9" class="browser-name"><abbr title="Node.js">Node &gt;=10.9 &lt;11</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node11_0 engine obsolete" data-browser="node11_0"><a href="#node11_0" class="browser-name"><abbr title="Node.js">Node 11</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node12_0 engine obsolete" data-browser="node12_0"><a href="#node12_0" class="browser-name"><abbr title="Node.js">Node 12.0-12.4</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node12_5 engine obsolete" data-browser="node12_5"><a href="#node12_5" class="browser-name"><abbr title="Node.js">Node 12.5-12.8</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node12_9 engine obsolete" data-browser="node12_9"><a href="#node12_9" class="browser-name"><abbr title="Node.js">Node 12.9-12.10</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node12_11 engine" data-browser="node12_11"><a href="#node12_11" class="browser-name"><abbr title="Node.js">Node &gt;=12.11 &lt;13</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node13_0 engine" data-browser="node13_0"><a href="#node13_0" class="browser-name"><abbr title="Node.js">Node 13.0-13.1</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node13_2 engine" data-browser="node13_2"><a href="#node13_2" class="browser-name"><abbr title="Node.js">Node &gt;=13.2 &lt;14</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform node14_0 engine" data-browser="node14_0"><a href="#node14_0" class="browser-name"><abbr title="Node.js">Node 14.0+</abbr></a><a href="#harmony-flag-note"><sup>[2]</sup></a></th>
        <th class="platform duktape2_0 engine obsolete" data-browser="duktape2_0"><a href="#duktape2_0" class="browser-name"><abbr title="Duktape 2.0">DUK 2.0</abbr></a></th>
        <th class="platform duktape2_1 engine obsolete" data-browser="duktape2_1"><a href="#duktape2_1" class="browser-name"><abbr title="Duktape 2.1">DUK 2.1</abbr></a></th>
        <th class="platform duktape2_2 engine obsolete" data-browser="duktape2_2"><a href="#duktape2_2" class="browser-name"><abbr title="Duktape 2.2">DUK 2.2</abbr></a></th>
        <th class="platform duktape2_3 engine" data-browser="duktape2_3"><a href="#duktape2_3" class="browser-name"><abbr title="Duktape 2.3">DUK 2.3</abbr></a></th>
        <th class="platform graalvm19 engine" data-browser="graalvm19"><a href="#graalvm19" class="browser-name"><abbr title="GraalVM JavaScript 19.3.1">GraalVM 19.3.1</abbr></a><a href="#graalvm-node-mode-note"><sup>[3]</sup></a></th>
        <th class="platform graalvm20 engine obsolete" data-browser="graalvm20"><a href="#graalvm20" class="browser-name"><abbr title="GraalVM JavaScript 20.0.0">GraalVM 20.0.0</abbr></a><a href="#graalvm-node-mode-note"><sup>[3]</sup></a></th>
        <th class="platform graalvm20_1 engine" data-browser="graalvm20_1"><a href="#graalvm20_1" class="browser-name"><abbr title="GraalVM JavaScript 20.1.0">GraalVM 20.1.0</abbr></a><a href="#graalvm-node-mode-note"><sup>[3]</sup></a></th>
        <th class="platform android4_4 mobile obsolete" data-browser="android4_4"><a href="#android4_4" class="browser-name"><abbr title="Android Browser 4.4 (KitKat)">AN 4.4</abbr></a></th>
        <th class="platform android4_4_3 mobile obsolete" data-browser="android4_4_3"><a href="#android4_4_3" class="browser-name"><abbr title="Android Browser 4.4.3 (KitKat)">AN 4.4.3</abbr></a></th>
        <th class="platform ios10_3 mobile obsolete" data-browser="ios10_3"><a href="#ios10_3" class="browser-name"><abbr title="iOS Safari">iOS &gt;=10.3 &lt;11</abbr></a></th>
        <th class="platform ios11 mobile obsolete" data-browser="ios11"><a href="#ios11" class="browser-name"><abbr title="iOS Safari">iOS 11</abbr></a></th>
        <th class="platform ios11_3 mobile obsolete" data-browser="ios11_3"><a href="#ios11_3" class="browser-name"><abbr title="iOS Safari">iOS 11.3</abbr></a></th>
        <th class="platform ios12 mobile" data-browser="ios12"><a href="#ios12" class="browser-name"><abbr title="iOS Safari">iOS 12</abbr></a></th>
        <th class="platform ios12_2 mobile" data-browser="ios12_2"><a href="#ios12_2" class="browser-name"><abbr title="iOS Safari">iOS 12.2</abbr></a></th>
        <th class="platform ios13 mobile" data-browser="ios13"><a href="#ios13" class="browser-name"><abbr title="iOS Safari">iOS 13</abbr></a></th>
        <th class="platform ios13_4 mobile" data-browser="ios13_4"><a href="#ios13_4" class="browser-name"><abbr title="iOS Safari">iOS 13.4</abbr></a></th>
        <th class="platform samsung10 mobile obsolete" data-browser="samsung10"><a href="#samsung10" class="browser-name"><abbr title="Samsung Internet for Android 10">Samsung 10</abbr></a></th>
        <th class="platform samsung11 mobile" data-browser="samsung11"><a href="#samsung11" class="browser-name"><abbr title="Samsung Internet for Android 11">Samsung 11</abbr></a></th>
        <th class="platform samsung12 mobile" data-browser="samsung12"><a href="#samsung12" class="browser-name"><abbr title="Samsung Internet for Android 12">Samsung 12</abbr></a></th>
        <th class="platform samsung13 mobile unstable" data-browser="samsung13"><a href="#samsung13" class="browser-name"><abbr title="Samsung Internet for Android 13">Samsung 13 Beta</abbr></a></th>
        <th class="platform opera_mobile51 mobile obsolete" data-browser="opera_mobile51"><a href="#opera_mobile51" class="browser-name"><abbr title="Opera Mobile for Android 51">Opera Mobile 51</abbr></a></th>
        <th class="platform opera_mobile52 mobile obsolete" data-browser="opera_mobile52"><a href="#opera_mobile52" class="browser-name"><abbr title="Opera Mobile for Android 52">Opera Mobile 52</abbr></a></th>
        <th class="platform opera_mobile53 mobile obsolete" data-browser="opera_mobile53"><a href="#opera_mobile53" class="browser-name"><abbr title="Opera Mobile for Android 53">Opera Mobile 53</abbr></a></th>
        <th class="platform opera_mobile54 mobile" data-browser="opera_mobile54"><a href="#opera_mobile54" class="browser-name"><abbr title="Opera Mobile for Android 54">Opera Mobile 54</abbr></a></th>
        <th class="platform opera_mobile55 mobile" data-browser="opera_mobile55"><a href="#opera_mobile55" class="browser-name"><abbr title="Opera Mobile for Android 55">Opera Mobile 55</abbr></a></th>
        </tr>

      </thead>


    <tbody>
        <!-- TABLE BODY -->
    <tr class="supertest" significance="1"><td id="test-Intl_object"></td>
      <td class="tally obsolete" data-browser="ie8" data-tally="0">0/2</td>
      <td class="tally obsolete" data-browser="ie9" data-tally="0">0/2</td>
      <td class="tally obsolete" data-browser="ie10" data-tally="0">0/2</td>
      <td class="tally" data-browser="ie11" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox68" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox69" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox70" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox71" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox72" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox73" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox74" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox75" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox76" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox77" data-tally="1">2/2</td>
      <td class="tally" data-browser="firefox78" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="firefox79" data-tally="1">2/2</td>
      <td class="tally" data-browser="firefox80" data-tally="1">2/2</td>
      <td class="tally" data-browser="firefox81" data-tally="1">2/2</td>
      <td class="tally unstable" data-browser="firefox82" data-tally="1">2/2</td>
      <td class="tally unstable" data-browser="firefox83" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera12_10" data-tally="0">0/2</td>
      <td class="tally obsolete" data-browser="chrome77" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="chrome78" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="chrome79" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="chrome80" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="chrome81" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="chrome83" data-tally="1">2/2</td>
      <td class="tally" data-browser="chrome84" data-tally="1">2/2</td>
      <td class="tally" data-browser="chrome85" data-tally="1">2/2</td>
      <td class="tally unstable" data-browser="chrome86" data-tally="1">2/2</td>
      <td class="tally unstable" data-browser="chrome87" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="edge17" data-tally="1">2/2</td>
      <td class="tally" data-browser="edge18" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="edge79" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="edge80" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="edge81" data-tally="1">2/2</td>
      <td class="tally" data-browser="edge83" data-tally="1">2/2</td>
      <td class="tally" data-browser="edge84" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="safari12" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="safari12_1" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="safari13" data-tally="1">2/2</td>
      <td class="tally" data-browser="safari13_1" data-tally="1">2/2</td>
      <td class="tally" data-browser="safari14" data-tally="1">2/2</td>
      <td class="tally unstable" data-browser="safaritp" data-tally="1">2/2</td>
      <td class="tally unstable" data-browser="webkit" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera63" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera64" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera65" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera66" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera67" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera68" data-tally="1">2/2</td>
      <td class="tally" data-browser="opera69" data-tally="1">2/2</td>
      <td class="tally" data-browser="opera70" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="phantom2_1" data-tally="0">0/2</td>
      <td class="tally obsolete" data-browser="node0_10" data-tally="0">0/2</td>
      <td class="tally obsolete" data-browser="node0_12" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node4" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node6_5" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node7" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node7_6" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node8" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node8_3" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node8_7" data-tally="1">2/2</td>
      <td class="tally" data-browser="node8_10" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node10_0" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node10_4" data-tally="1">2/2</td>
      <td class="tally" data-browser="node10_9" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node11_0" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node12_0" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node12_5" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="node12_9" data-tally="1">2/2</td>
      <td class="tally" data-browser="node12_11" data-tally="1">2/2</td>
      <td class="tally" data-browser="node13_0" data-tally="1">2/2</td>
      <td class="tally" data-browser="node13_2" data-tally="1">2/2</td>
      <td class="tally" data-browser="node14_0" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="duktape2_0" data-tally="0">0/2</td>
      <td class="tally obsolete" data-browser="duktape2_1" data-tally="0">0/2</td>
      <td class="tally obsolete" data-browser="duktape2_2" data-tally="0">0/2</td>
      <td class="tally" data-browser="duktape2_3" data-tally="0">0/2</td>
      <td class="tally" data-browser="graalvm19" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="graalvm20" data-tally="1">2/2</td>
      <td class="tally" data-browser="graalvm20_1" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="android4_4" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="android4_4_3" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="ios10_3" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="ios11" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="ios11_3" data-tally="1">2/2</td>
      <td class="tally" data-browser="ios12" data-tally="1">2/2</td>
      <td class="tally" data-browser="ios12_2" data-tally="1">2/2</td>
      <td class="tally" data-browser="ios13" data-tally="1">2/2</td>
      <td class="tally" data-browser="ios13_4" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="samsung10" data-tally="1">2/2</td>
      <td class="tally" data-browser="samsung11" data-tally="1">2/2</td>
      <td class="tally" data-browser="samsung12" data-tally="1">2/2</td>
      <td class="tally unstable" data-browser="samsung13" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera_mobile51" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera_mobile52" data-tally="1">2/2</td>
      <td class="tally obsolete" data-browser="opera_mobile53" data-tally="1">2/2</td>
      <td class="tally" data-browser="opera_mobile54" data-tally="1">2/2</td>
      <td class="tally" data-browser="opera_mobile55" data-tally="1">2/2</td>
    </tr>
    
<!-- 
    <tr class="subtest" data-parent="Intl_object" id="test-Intl_object_exists_on_global"><td><span><a class="anchor" href="#test-Intl_object_exists_on_global">&#xA7;</a>exists on global</span><script data-source="
    return typeof Intl === &apos;object&apos;;
          ">test(function(){try{var asyncTestPassed=global.__asyncPassedFn && __asyncPassedFn("1");try{return Function("asyncTestPassed","\nreturn typeof Intl === 'object';\n      ")(asyncTestPassed)}catch(e){asyncTestPassed=global.__strictAsyncPassedFn && __strictAsyncPassedFn("1");return Function("asyncTestPassed","'use strict';"+"\nreturn typeof Intl === 'object';\n      ")(asyncTestPassed)&&"Strict"}}catch(e){return false;}}());
    </script>
    </td> -->

</tbody>







    </table>


























    <thead>
      <tr>
        <th colspan="3" class="platformtype"></th>

        <th
          colspan="4"
          class="platformtype"
          id="compiler-header"
          style="background: #ffdfa4"
        >
          Compilers/polyfills
        </th>

        <th
          colspan="19"
          class="platformtype"
          id="desktop-header"
          style="background: #fff4c3"
        >
          Desktop browsers
        </th>

        <th
          colspan="10"
          class="platformtype"
          id="engine-header"
          style="background: #f8e8a0"
        >
          Servers/runtimes
        </th>

        <th
          colspan="9"
          class="platformtype"
          id="mobile-header"
          style="background: #f8daa0"
        >
          Mobile
        </th>
      </tr>

      <tr>
        <th class="test-name">
          Feature name<span
            class="folddown"
            title="Expand/Collapse all tests"
            style="cursor: pointer;"
            >►</span
          >
        </th>

        <th
          class="current"
          data-num="0"
          data-features="1"
          data-flagged-features="1"
          style="background-image: linear-gradient(to top, rgba(191, 191, 191, 0.5) 0%, rgba(191, 191, 191, 0.5) 100%, transparent 100%, transparent 100%);"
        >
          Current browser<sup
            class="num-features"
            title="Number of implemented features"
            ><b style="color:hsl(120,100%,25%)">100</b>%</sup
          >
        </th>

        <th></th>

        <!-- TABLE HEADERS -->
        <th
          class="platform tr compiler obsolete"
          data-browser="tr"
          data-num="1"
          data-features="0.039755351681957186"
          data-flagged-features="0.039755351681957186"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 3%, transparent 3%, transparent 100%);"
        >
          <a href="#tr" class="browser-name"
            ><abbr title="Traceur">Traceur</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(4,100%,25%)">3</b>%</sup
          >
        </th>
        <th
          class="platform babel6corejs2 compiler obsolete"
          data-browser="babel6corejs2"
          data-num="2"
          data-features="0.3608562691131499"
          data-flagged-features="0.3608562691131499"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 36%, transparent 36%, transparent 100%);"
        >
          <a href="#babel6corejs2" class="browser-name"
            ><abbr title="Babel 6.5 + core-js 2.5"
              >Babel 6 +<br /><nobr>core-js 2</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(43,100%,25%)">36</b>%</sup
          >
        </th>
        <th
          class="platform babel7corejs2 compiler obsolete"
          data-browser="babel7corejs2"
          data-num="3"
          data-features="0.45259938837920494"
          data-flagged-features="0.45259938837920494"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 45%, transparent 45%, transparent 100%);"
        >
          <a href="#babel7corejs2" class="browser-name"
            ><abbr title="Babel 7 + core-js 2.5"
              >Babel 7 +<br /><nobr>core-js 2</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(54,100%,25%)">45</b>%</sup
          >
        </th>
        <th
          class="platform babel7corejs3 compiler"
          data-browser="babel7corejs3"
          data-num="4"
          data-features="0.6146788990825688"
          data-flagged-features="0.6146788990825688"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 61%, transparent 61%, transparent 100%);"
        >
          <a href="#babel7corejs3" class="browser-name"
            ><abbr title="Babel 7 + core-js 3"
              >Babel 7 +<br /><nobr>core-js 3</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(73,100%,25%)">61</b>%</sup
          >
        </th>
        <th
          class="platform closure compiler obsolete"
          data-browser="closure"
          data-num="5"
          data-features="0.18960244648318042"
          data-flagged-features="0.18960244648318042"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 18%, transparent 18%, transparent 100%);"
        >
          <a href="#closure" class="browser-name"
            ><abbr title="Closure Compiler v20180204">Closure 2018.02</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(22,100%,25%)">18</b>%</sup
          >
        </th>
        <th
          class="platform closure20190121 compiler obsolete"
          data-browser="closure20190121"
          data-num="6"
          data-features="0.2599388379204893"
          data-flagged-features="0.2599388379204893"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 25%, transparent 25%, transparent 100%);"
        >
          <a href="#closure20190121" class="browser-name"
            ><abbr title="Closure Compiler v20190121">Closure 2019.01</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(31,100%,25%)">25</b>%</sup
          >
        </th>
        <th
          class="platform closure20190709 compiler obsolete"
          data-browser="closure20190709"
          data-num="7"
          data-features="0.37003058103975534"
          data-flagged-features="0.37003058103975534"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 37%, transparent 37%, transparent 100%);"
        >
          <a href="#closure20190709" class="browser-name"
            ><abbr title="Closure Compiler >=v20190709 <v20191027"
              >Closure 2019.07</abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(44,100%,25%)">37</b>%</sup
          >
        </th>
        <th
          class="platform closure20191027 compiler obsolete"
          data-browser="closure20191027"
          data-num="8"
          data-features="0.3883792048929663"
          data-flagged-features="0.3883792048929663"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 38%, transparent 38%, transparent 100%);"
        >
          <a href="#closure20191027" class="browser-name"
            ><abbr title="Closure Compiler >=v20191027 <v20200101"
              >Closure 2019.10</abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(46,100%,25%)">38</b>%</sup
          >
        </th>
        <th
          class="platform closure20200101 compiler obsolete"
          data-browser="closure20200101"
          data-num="9"
          data-features="0.4250764525993883"
          data-flagged-features="0.4250764525993883"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 42%, transparent 42%, transparent 100%);"
        >
          <a href="#closure20200101" class="browser-name"
            ><abbr title="Closure Compiler v20200101">Closure 2020.01</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(51,100%,25%)">42</b>%</sup
          >
        </th>
        <th
          class="platform closure20200112 compiler obsolete"
          data-browser="closure20200112"
          data-num="10"
          data-features="0.4250764525993883"
          data-flagged-features="0.4250764525993883"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 42%, transparent 42%, transparent 100%);"
        >
          <a href="#closure20200112" class="browser-name"
            ><abbr title="Closure Compiler >=v20200112 <v20200315"
              >Closure 2020.01</abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(51,100%,25%)">42</b>%</sup
          >
        </th>
        <th
          class="platform closure20200315 compiler obsolete"
          data-browser="closure20200315"
          data-num="11"
          data-features="0.4250764525993884"
          data-flagged-features="0.4250764525993884"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 42%, transparent 42%, transparent 100%);"
        >
          <a href="#closure20200315" class="browser-name"
            ><abbr title="Closure Compiler >=v20200315 <v20200517"
              >Closure 2020.03</abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(51,100%,25%)">42</b>%</sup
          >
        </th>
        <th
          class="platform closure20200517 compiler"
          data-browser="closure20200517"
          data-num="12"
          data-features="0.4434250764525993"
          data-flagged-features="0.4434250764525993"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 44%, transparent 44%, transparent 100%);"
        >
          <a href="#closure20200517" class="browser-name"
            ><abbr title="Closure Compiler >=v20200517"
              >Closure 2020.05</abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(53,100%,25%)">44</b>%</sup
          >
        </th>
        <th
          class="platform typescript1corejs2 compiler obsolete"
          data-browser="typescript1corejs2"
          data-num="13"
          data-features="0.24006116207951067"
          data-flagged-features="0.24006116207951067"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 24%, transparent 24%, transparent 100%);"
        >
          <a href="#typescript1corejs2" class="browser-name"
            ><abbr title="TypeScript 1.8 + core-js 2.5"
              >Type-<br />Script +<br /><nobr>core-js 2</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(28,100%,25%)">24</b>%</sup
          >
        </th>
        <th
          class="platform typescript2_9corejs2 compiler obsolete"
          data-browser="typescript2_9corejs2"
          data-num="14"
          data-features="0.36850152905198774"
          data-flagged-features="0.36850152905198774"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 36%, transparent 36%, transparent 100%);"
        >
          <a href="#typescript2_9corejs2" class="browser-name"
            ><abbr title="TypeScript 2.9 + core-js 2.5"
              >Type-<br />Script +<br /><nobr>core-js 2</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(44,100%,25%)">36</b>%</sup
          >
        </th>
        <th
          class="platform typescript3_2corejs2 compiler obsolete"
          data-browser="typescript3_2corejs2"
          data-num="15"
          data-features="0.36850152905198774"
          data-flagged-features="0.36850152905198774"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 36%, transparent 36%, transparent 100%);"
        >
          <a href="#typescript3_2corejs2" class="browser-name"
            ><abbr title="TypeScript 3.2 + core-js 2.5"
              >Type-<br />Script +<br /><nobr>core-js 2</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(44,100%,25%)">36</b>%</sup
          >
        </th>
        <th
          class="platform typescript3_6corejs3 compiler obsolete"
          data-browser="typescript3_6corejs3"
          data-num="16"
          data-features="0.5305810397553516"
          data-flagged-features="0.5305810397553516"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 53%, transparent 53%, transparent 100%);"
        >
          <a href="#typescript3_6corejs3" class="browser-name"
            ><abbr title="TypeScript 3.6 + core-js 3"
              >Type-<br />Script +<br /><nobr>core-js 3</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(63,100%,25%)">53</b>%</sup
          >
        </th>
        <th
          class="platform typescript3_7corejs3 compiler obsolete"
          data-browser="typescript3_7corejs3"
          data-num="17"
          data-features="0.5856269113149847"
          data-flagged-features="0.5856269113149847"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 58%, transparent 58%, transparent 100%);"
        >
          <a href="#typescript3_7corejs3" class="browser-name"
            ><abbr title="TypeScript 3.7 + core-js 3"
              >Type-<br />Script +<br /><nobr>core-js 3</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(70,100%,25%)">58</b>%</sup
          >
        </th>
        <th
          class="platform typescript3_8corejs3 compiler obsolete"
          data-browser="typescript3_8corejs3"
          data-num="18"
          data-features="0.5856269113149847"
          data-flagged-features="0.5856269113149847"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 58%, transparent 58%, transparent 100%);"
        >
          <a href="#typescript3_8corejs3" class="browser-name"
            ><abbr title="TypeScript 3.8 + core-js 3"
              >Type-<br />Script +<br /><nobr>core-js 3</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(70,100%,25%)">58</b>%</sup
          >
        </th>
        <th
          class="platform typescript3_9corejs3 compiler obsolete"
          data-browser="typescript3_9corejs3"
          data-num="19"
          data-features="0.5856269113149847"
          data-flagged-features="0.5856269113149847"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 58%, transparent 58%, transparent 100%);"
        >
          <a href="#typescript3_9corejs3" class="browser-name"
            ><abbr title="TypeScript 3.9 + core-js 3"
              >Type-<br />Script +<br /><nobr>core-js 3</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(70,100%,25%)">58</b>%</sup
          >
        </th>
        <th
          class="platform typescript4corejs3 compiler"
          data-browser="typescript4corejs3"
          data-num="20"
          data-features="0.5856269113149847"
          data-flagged-features="0.5856269113149847"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 58%, transparent 58%, transparent 100%);"
        >
          <a href="#typescript4corejs3" class="browser-name"
            ><abbr title="TypeScript 4 + core-js 3"
              >Type-<br />Script +<br /><nobr>core-js 3</nobr></abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(70,100%,25%)">58</b>%</sup
          >
        </th>
        <th
          class="platform es7shim compiler"
          data-browser="es7shim"
          data-num="21"
          data-features="0.0672782874617737"
          data-flagged-features="0.0672782874617737"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 6%, transparent 6%, transparent 100%);"
        >
          <a href="#es7shim" class="browser-name"
            ><abbr title="es7-shim">es7-shim</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(8,100%,25%)">6</b>%</sup
          >
        </th>
        <th
          class="platform ie11 desktop"
          data-browser="ie11"
          data-num="22"
          data-features="0.0163826998689384"
          data-flagged-features="0.0163826998689384"
          style="background-image: linear-gradient(to top, rgba(38, 114, 237, 0.5) 0%, rgba(38, 114, 237, 0.5) 1%, transparent 1%, transparent 100%);"
        >
          <a href="#ie11" class="browser-name"
            ><abbr title="Internet Explorer 11">IE 11</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(1,100%,25%)">1</b>%</sup
          >
        </th>
        <th
          class="platform firefox68 desktop obsolete"
          data-browser="firefox68"
          data-num="23"
          data-features="0.6605504587155964"
          data-flagged-features="0.7339449541284404"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 66%, transparent 66%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 73%, transparent 73%, transparent 100%);"
        >
          <a href="#firefox68" class="browser-name"
            ><abbr title="Firefox 68 Extended Support Release"
              >FF 68 ESR</abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(79,100%,25%)">66</b>%</sup
          >
        </th>
        <th
          class="platform firefox69 desktop obsolete"
          data-browser="firefox69"
          data-num="24"
          data-features="0.6605504587155964"
          data-flagged-features="0.7339449541284404"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 66%, transparent 66%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 73%, transparent 73%, transparent 100%);"
        >
          <a href="#firefox69" class="browser-name"
            ><abbr title="Firefox 69">FF 69</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(79,100%,25%)">66</b>%</sup
          >
        </th>
        <th
          class="platform firefox70 desktop obsolete"
          data-browser="firefox70"
          data-num="25"
          data-features="0.6788990825688074"
          data-flagged-features="0.7339449541284404"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 67%, transparent 67%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 73%, transparent 73%, transparent 100%);"
        >
          <a href="#firefox70" class="browser-name"
            ><abbr title="Firefox 70">FF 70</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(81,100%,25%)">67</b>%</sup
          >
        </th>
        <th
          class="platform firefox71 desktop obsolete"
          data-browser="firefox71"
          data-num="26"
          data-features="0.6972477064220184"
          data-flagged-features="0.7339449541284404"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 69%, transparent 69%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 73%, transparent 73%, transparent 100%);"
        >
          <a href="#firefox71" class="browser-name"
            ><abbr title="Firefox 71">FF 71</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(83,100%,25%)">69</b>%</sup
          >
        </th>
        <th
          class="platform firefox72 desktop obsolete"
          data-browser="firefox72"
          data-num="27"
          data-features="0.7155963302752294"
          data-flagged-features="0.7889908256880734"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 71%, transparent 71%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 78%, transparent 78%, transparent 100%);"
        >
          <a href="#firefox72" class="browser-name"
            ><abbr title="Firefox 72">FF 72</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(85,100%,25%)">71</b>%</sup
          >
        </th>
        <th
          class="platform firefox73 desktop obsolete"
          data-browser="firefox73"
          data-num="28"
          data-features="0.7247706422018348"
          data-flagged-features="0.7981651376146789"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 72%, transparent 72%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 79%, transparent 79%, transparent 100%);"
        >
          <a href="#firefox73" class="browser-name"
            ><abbr title="Firefox 73">FF 73</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(86,100%,25%)">72</b>%</sup
          >
        </th>
        <th
          class="platform firefox74 desktop obsolete"
          data-browser="firefox74"
          data-num="29"
          data-features="0.7614678899082569"
          data-flagged-features="0.8715596330275229"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 76%, transparent 76%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 87%, transparent 87%, transparent 100%);"
        >
          <a href="#firefox74" class="browser-name"
            ><abbr title="Firefox 74">FF 74</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(91,100%,25%)">76</b>%</sup
          >
        </th>
        <th
          class="platform firefox75 desktop obsolete"
          data-browser="firefox75"
          data-num="30"
          data-features="0.7614678899082569"
          data-flagged-features="0.8715596330275229"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 76%, transparent 76%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 87%, transparent 87%, transparent 100%);"
        >
          <a href="#firefox75" class="browser-name"
            ><abbr title="Firefox 75">FF 75</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(91,100%,25%)">76</b>%</sup
          >
        </th>
        <th
          class="platform firefox76 desktop obsolete"
          data-browser="firefox76"
          data-num="31"
          data-features="0.7614678899082569"
          data-flagged-features="0.8715596330275229"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 76%, transparent 76%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 87%, transparent 87%, transparent 100%);"
        >
          <a href="#firefox76" class="browser-name"
            ><abbr title="Firefox 76">FF 76</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(91,100%,25%)">76</b>%</sup
          >
        </th>
        <th
          class="platform firefox77 desktop obsolete"
          data-browser="firefox77"
          data-num="32"
          data-features="0.7798165137614679"
          data-flagged-features="0.8791149487317863"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 77%, transparent 77%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 87%, transparent 87%, transparent 100%);"
        >
          <a href="#firefox77" class="browser-name"
            ><abbr title="Firefox 77">FF 77</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(93,100%,25%)">77</b>%</sup
          >
        </th>
        <th
          class="platform firefox78 desktop"
          data-browser="firefox78"
          data-num="33"
          data-features="0.8791149487317863"
          data-flagged-features="0.9892066918510524"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(255, 149, 0, 0.2) 0%, rgba(255, 149, 0, 0.2) 98%, transparent 98%, transparent 100%);"
        >
          <a href="#firefox78" class="browser-name"
            ><abbr title="Firefox 78 Extended Support Release"
              >FF 78 ESR</abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(105,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform firefox79 desktop obsolete"
          data-browser="firefox79"
          data-num="34"
          data-features="1"
          data-flagged-features="1"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 100%, transparent 100%, transparent 100%);"
        >
          <a href="#firefox79" class="browser-name"
            ><abbr title="Firefox 79">FF 79</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(120,100%,25%)">100</b>%</sup
          >
        </th>
        <th
          class="platform firefox80 desktop"
          data-browser="firefox80"
          data-num="35"
          data-features="1"
          data-flagged-features="1"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 100%, transparent 100%, transparent 100%);"
        >
          <a href="#firefox80" class="browser-name"
            ><abbr title="Firefox 80">FF 80</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(120,100%,25%)">100</b>%</sup
          >
        </th>
        <th
          class="platform firefox81 desktop"
          data-browser="firefox81"
          data-num="36"
          data-features="1"
          data-flagged-features="1"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 100%, transparent 100%, transparent 100%);"
        >
          <a href="#firefox81" class="browser-name"
            ><abbr title="Firefox 81">FF 81</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(120,100%,25%)">100</b>%</sup
          >
        </th>
        <th
          class="platform firefox82 desktop unstable"
          data-browser="firefox82"
          data-num="37"
          data-features="1"
          data-flagged-features="1"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 100%, transparent 100%, transparent 100%);"
        >
          <a href="#firefox82" class="browser-name"
            ><abbr title="Firefox 82 Beta">FF 82 Beta</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(120,100%,25%)">100</b>%</sup
          >
        </th>
        <th
          class="platform firefox83 desktop unstable"
          data-browser="firefox83"
          data-num="38"
          data-features="1"
          data-flagged-features="1"
          style="background-image: linear-gradient(to top, rgba(255, 149, 0, 0.5) 0%, rgba(255, 149, 0, 0.5) 100%, transparent 100%, transparent 100%);"
        >
          <a href="#firefox83" class="browser-name"
            ><abbr title="Firefox 83 Nightly">FF 83 Nightly</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(120,100%,25%)">100</b>%</sup
          >
        </th>
        <th
          class="platform opera12_10 desktop obsolete"
          data-browser="opera12_10"
          data-num="39"
          data-features="0.018676277850589777"
          data-flagged-features="0.018676277850589777"
          style="background-image: linear-gradient(to top, rgba(204, 15, 22, 0.5) 0%, rgba(204, 15, 22, 0.5) 1%, transparent 1%, transparent 100%);"
        >
          <a href="#opera12_10" class="browser-name"
            ><abbr title="Opera 12.10">OP 12.10</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(2,100%,25%)">1</b>%</sup
          >
        </th>
        <th
          class="platform chrome77 desktop obsolete"
          data-browser="chrome77"
          data-num="40"
          data-features="0.8073394495412844"
          data-flagged-features="0.8440366972477065"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#chrome77" class="browser-name"
            ><abbr title="Chrome 77">CH 77</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform chrome78 desktop obsolete"
          data-browser="chrome78"
          data-num="41"
          data-features="0.8073394495412844"
          data-flagged-features="0.8990825688073395"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 89%, transparent 89%, transparent 100%);"
        >
          <a href="#chrome78" class="browser-name"
            ><abbr title="Chrome 78">CH 78</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform chrome79 desktop obsolete"
          data-browser="chrome79"
          data-num="42"
          data-features="0.8073394495412844"
          data-flagged-features="0.8990825688073395"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 89%, transparent 89%, transparent 100%);"
        >
          <a href="#chrome79" class="browser-name"
            ><abbr title="Chrome 79">CH 79</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform chrome80 desktop obsolete"
          data-browser="chrome80"
          data-num="43"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#chrome80" class="browser-name"
            ><abbr title="Chrome 80">CH 80</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform chrome81 desktop obsolete"
          data-browser="chrome81"
          data-num="44"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#chrome81" class="browser-name"
            ><abbr title="Chrome 81">CH 81</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform chrome83 desktop obsolete"
          data-browser="chrome83"
          data-num="45"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#chrome83" class="browser-name"
            ><abbr title="Chrome 83">CH 83</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform chrome84 desktop"
          data-browser="chrome84"
          data-num="46"
          data-features="0.8715596330275229"
          data-flagged-features="0.963302752293578"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 96%, transparent 96%, transparent 100%);"
        >
          <a href="#chrome84" class="browser-name"
            ><abbr title="Chrome 84">CH 84</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform chrome85 desktop"
          data-browser="chrome85"
          data-num="47"
          data-features="1"
          data-flagged-features="1"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 100%, transparent 100%, transparent 100%);"
        >
          <a href="#chrome85" class="browser-name"
            ><abbr title="Chrome 85">CH 85</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(120,100%,25%)">100</b>%</sup
          >
        </th>
        <th
          class="platform chrome86 desktop unstable"
          data-browser="chrome86"
          data-num="48"
          data-features="1"
          data-flagged-features="1"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 100%, transparent 100%, transparent 100%);"
        >
          <a href="#chrome86" class="browser-name"
            ><abbr title="Chrome 86 Beta">CH 86</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(120,100%,25%)">100</b>%</sup
          >
        </th>
        <th
          class="platform chrome87 desktop unstable"
          data-browser="chrome87"
          data-num="49"
          data-features="1"
          data-flagged-features="1"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 100%, transparent 100%, transparent 100%);"
        >
          <a href="#chrome87" class="browser-name"
            ><abbr title="Chrome 87 Canary">CH 87</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(120,100%,25%)">100</b>%</sup
          >
        </th>
        <th
          class="platform edge17 desktop obsolete"
          data-browser="edge17"
          data-num="50"
          data-features="0.30291612057667106"
          data-flagged-features="0.30291612057667106"
          style="background-image: linear-gradient(to top, rgba(38, 114, 237, 0.5) 0%, rgba(38, 114, 237, 0.5) 30%, transparent 30%, transparent 100%);"
        >
          <a href="#edge17" class="browser-name"
            ><abbr title="Microsoft Edge 17">Edge 17</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(36,100%,25%)">30</b>%</sup
          >
        </th>
        <th
          class="platform edge18 desktop"
          data-browser="edge18"
          data-num="51"
          data-features="0.3396133682830931"
          data-flagged-features="0.3396133682830931"
          style="background-image: linear-gradient(to top, rgba(38, 114, 237, 0.5) 0%, rgba(38, 114, 237, 0.5) 33%, transparent 33%, transparent 100%);"
        >
          <a href="#edge18" class="browser-name"
            ><abbr title="Microsoft Edge 18">Edge 18</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(40,100%,25%)">33</b>%</sup
          >
        </th>
        <th
          class="platform edge79 desktop obsolete"
          data-browser="edge79"
          data-num="52"
          data-features="0.8073394495412844"
          data-flagged-features="0.8990825688073395"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 89%, transparent 89%, transparent 100%);"
        >
          <a href="#edge79" class="browser-name"
            ><abbr title="Microsoft Edge 79">Edge 79</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform edge80 desktop obsolete"
          data-browser="edge80"
          data-num="53"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#edge80" class="browser-name"
            ><abbr title="Microsoft Edge 80">Edge 80</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform edge81 desktop obsolete"
          data-browser="edge81"
          data-num="54"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#edge81" class="browser-name"
            ><abbr title="Microsoft Edge 81">Edge 81</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform edge83 desktop"
          data-browser="edge83"
          data-num="55"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#edge83" class="browser-name"
            ><abbr title="Microsoft Edge 83">Edge 83</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform edge84 desktop"
          data-browser="edge84"
          data-num="56"
          data-features="0.8715596330275229"
          data-flagged-features="0.963302752293578"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 96%, transparent 96%, transparent 100%);"
        >
          <a href="#edge84" class="browser-name"
            ><abbr title="Microsoft Edge 84">Edge 84</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform safari12 desktop obsolete"
          data-browser="safari12"
          data-num="57"
          data-features="0.5792922673656619"
          data-flagged-features="0.5792922673656619"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 57%, transparent 57%, transparent 100%);"
        >
          <a href="#safari12" class="browser-name"
            ><abbr title="Safari 12">SF 12</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(69,100%,25%)">57</b>%</sup
          >
        </th>
        <th
          class="platform safari12_1 desktop obsolete"
          data-browser="safari12_1"
          data-num="58"
          data-features="0.6404543468763653"
          data-flagged-features="0.6404543468763653"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 64%, transparent 64%, transparent 100%);"
        >
          <a href="#safari12_1" class="browser-name"
            ><abbr title="Safari 12.1">SF&nbsp;12.1</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(76,100%,25%)">64</b>%</sup
          >
        </th>
        <th
          class="platform safari13 desktop obsolete"
          data-browser="safari13"
          data-num="59"
          data-features="0.7077326343381389"
          data-flagged-features="0.7077326343381389"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 70%, transparent 70%, transparent 100%);"
        >
          <a href="#safari13" class="browser-name"
            ><abbr title="Safari 13">SF&nbsp;13</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(84,100%,25%)">70</b>%</sup
          >
        </th>
        <th
          class="platform safari13_1 desktop"
          data-browser="safari13_1"
          data-num="60"
          data-features="0.7903014416775884"
          data-flagged-features="0.7903014416775884"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 79%, transparent 79%, transparent 100%);"
        >
          <a href="#safari13_1" class="browser-name"
            ><abbr title="Safari 13.1">SF&nbsp;13.1</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(94,100%,25%)">79</b>%</sup
          >
        </th>
        <th
          class="platform safari14 desktop"
          data-browser="safari14"
          data-num="61"
          data-features="0.8453473132372215"
          data-flagged-features="0.8453473132372215"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#safari14" class="browser-name"
            ><abbr title="Safari 14">SF&nbsp;14</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(101,100%,25%)">84</b>%</sup
          >
        </th>
        <th
          class="platform safaritp desktop unstable"
          data-browser="safaritp"
          data-num="62"
          data-features="0.8453473132372215"
          data-flagged-features="0.8453473132372215"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#safaritp" class="browser-name"
            ><abbr title="Safari Technology Preview Release 106">SF TP</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(101,100%,25%)">84</b>%</sup
          >
        </th>
        <th
          class="platform webkit desktop unstable"
          data-browser="webkit"
          data-num="63"
          data-features="0.8453473132372215"
          data-flagged-features="0.8453473132372215"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#webkit" class="browser-name"
            ><abbr title="Webkit r222556 (October 4, 2017)">WK</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(101,100%,25%)">84</b>%</sup
          >
        </th>
        <th
          class="platform opera63 desktop obsolete"
          data-browser="opera63"
          data-num="64"
          data-features="0.8073394495412844"
          data-flagged-features="0.8440366972477065"
          style="background-image: linear-gradient(to top, rgba(204, 15, 22, 0.5) 0%, rgba(204, 15, 22, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(204, 15, 22, 0.2) 0%, rgba(204, 15, 22, 0.2) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#opera63" class="browser-name"
            ><abbr title="Opera 63">OP 63</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform opera64 desktop obsolete"
          data-browser="opera64"
          data-num="65"
          data-features="0.8073394495412844"
          data-flagged-features="0.8440366972477065"
          style="background-image: linear-gradient(to top, rgba(204, 15, 22, 0.5) 0%, rgba(204, 15, 22, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(204, 15, 22, 0.2) 0%, rgba(204, 15, 22, 0.2) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#opera64" class="browser-name"
            ><abbr title="Opera 64">OP 64</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform opera65 desktop obsolete"
          data-browser="opera65"
          data-num="66"
          data-features="0.8073394495412844"
          data-flagged-features="0.8990825688073395"
          style="background-image: linear-gradient(to top, rgba(204, 15, 22, 0.5) 0%, rgba(204, 15, 22, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(204, 15, 22, 0.2) 0%, rgba(204, 15, 22, 0.2) 89%, transparent 89%, transparent 100%);"
        >
          <a href="#opera65" class="browser-name"
            ><abbr title="Opera 65">OP 65</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform opera66 desktop obsolete"
          data-browser="opera66"
          data-num="67"
          data-features="0.8073394495412844"
          data-flagged-features="0.8990825688073395"
          style="background-image: linear-gradient(to top, rgba(204, 15, 22, 0.5) 0%, rgba(204, 15, 22, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(204, 15, 22, 0.2) 0%, rgba(204, 15, 22, 0.2) 89%, transparent 89%, transparent 100%);"
        >
          <a href="#opera66" class="browser-name"
            ><abbr title="Opera 66">OP 66</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform opera67 desktop obsolete"
          data-browser="opera67"
          data-num="68"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(204, 15, 22, 0.5) 0%, rgba(204, 15, 22, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(204, 15, 22, 0.2) 0%, rgba(204, 15, 22, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#opera67" class="browser-name"
            ><abbr title="Opera 67">OP 67</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform opera68 desktop obsolete"
          data-browser="opera68"
          data-num="69"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(204, 15, 22, 0.5) 0%, rgba(204, 15, 22, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(204, 15, 22, 0.2) 0%, rgba(204, 15, 22, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#opera68" class="browser-name"
            ><abbr title="Opera 68">OP 68</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform opera69 desktop"
          data-browser="opera69"
          data-num="70"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(204, 15, 22, 0.5) 0%, rgba(204, 15, 22, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(204, 15, 22, 0.2) 0%, rgba(204, 15, 22, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#opera69" class="browser-name"
            ><abbr title="Opera 69">OP 69</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform opera70 desktop"
          data-browser="opera70"
          data-num="71"
          data-features="0.8715596330275229"
          data-flagged-features="0.963302752293578"
          style="background-image: linear-gradient(to top, rgba(204, 15, 22, 0.5) 0%, rgba(204, 15, 22, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(204, 15, 22, 0.2) 0%, rgba(204, 15, 22, 0.2) 96%, transparent 96%, transparent 100%);"
        >
          <a href="#opera70" class="browser-name"
            ><abbr title="Opera 70">OP 70</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform phantom2_1 engine obsolete"
          data-browser="phantom2_1"
          data-num="72"
          data-features="0.027850589777195282"
          data-flagged-features="0.027850589777195282"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 2%, transparent 2%, transparent 100%);"
        >
          <a href="#phantom2_1" class="browser-name"
            ><abbr title="PhantomJS 2.1">PJS</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(3,100%,25%)">2</b>%</sup
          >
        </th>
        <th
          class="platform node0_10 engine obsolete"
          data-browser="node0_10"
          data-num="73"
          data-features="0.009174311926605505"
          data-flagged-features="0.009174311926605505"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 0%, transparent 0%, transparent 100%);"
        >
          <a href="#node0_10" class="browser-name"
            ><abbr title="Node.js">Node 0.10</abbr></a
          ><a href="#harmony-flag-old-note"><sup>[1]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(1,100%,25%)">0</b>%</sup
          >
        </th>
        <th
          class="platform node0_12 engine obsolete"
          data-browser="node0_12"
          data-num="74"
          data-features="0.02408256880733945"
          data-flagged-features="0.033256880733944956"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 2%, transparent 2%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 3%, transparent 3%, transparent 100%);"
        >
          <a href="#node0_12" class="browser-name"
            ><abbr title="Node.js">Node 0.12</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(2,100%,25%)">2</b>%</sup
          >
        </th>
        <th
          class="platform node4 engine obsolete"
          data-browser="node4"
          data-num="75"
          data-features="0.04374180865006553"
          data-flagged-features="0.04374180865006553"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 4%, transparent 4%, transparent 100%);"
        >
          <a href="#node4" class="browser-name"
            ><abbr title="Node.js">Node 4</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(5,100%,25%)">4</b>%</sup
          >
        </th>
        <th
          class="platform node6_5 engine obsolete"
          data-browser="node6_5"
          data-num="76"
          data-features="0.11713630406290956"
          data-flagged-features="0.21373641199599105"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 11%, transparent 11%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 21%, transparent 21%, transparent 100%);"
        >
          <a href="#node6_5" class="browser-name"
            ><abbr title="Node.js">Node &gt;=6.5 &lt;7</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(14,100%,25%)">11</b>%</sup
          >
        </th>
        <th
          class="platform node7 engine obsolete"
          data-browser="node7"
          data-num="77"
          data-features="0.17676933158584535"
          data-flagged-features="0.26419512759232133"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 17%, transparent 17%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 26%, transparent 26%, transparent 100%);"
        >
          <a href="#node7" class="browser-name"
            ><abbr title="Node.js">Node 7.0-7.5</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(21,100%,25%)">17</b>%</sup
          >
        </th>
        <th
          class="platform node7_6 engine obsolete"
          data-browser="node7_6"
          data-num="78"
          data-features="0.2501638269986894"
          data-flagged-features="0.3192409991519544"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 25%, transparent 25%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 31%, transparent 31%, transparent 100%);"
        >
          <a href="#node7_6" class="browser-name"
            ><abbr title="Node.js">Node &gt;=7.6 &lt;8</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(30,100%,25%)">25</b>%</sup
          >
        </th>
        <th
          class="platform node8 engine obsolete"
          data-browser="node8"
          data-num="79"
          data-features="0.3017693315858454"
          data-flagged-features="0.3891951275923214"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 30%, transparent 30%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 38%, transparent 38%, transparent 100%);"
        >
          <a href="#node8" class="browser-name"
            ><abbr title="Node.js">Node &gt;=8.0 &lt;8.3</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(36,100%,25%)">30</b>%</sup
          >
        </th>
        <th
          class="platform node8_3 engine obsolete"
          data-browser="node8_3"
          data-num="80"
          data-features="0.3843381389252949"
          data-flagged-features="0.48623853211009177"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 38%, transparent 38%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 48%, transparent 48%, transparent 100%);"
        >
          <a href="#node8_3" class="browser-name"
            ><abbr title="Node.js">Node &gt;=8.3 &lt;8.7</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(46,100%,25%)">38</b>%</sup
          >
        </th>
        <th
          class="platform node8_7 engine obsolete"
          data-browser="node8_7"
          data-num="81"
          data-features="0.3843381389252949"
          data-flagged-features="0.48623853211009177"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 38%, transparent 38%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 48%, transparent 48%, transparent 100%);"
        >
          <a href="#node8_7" class="browser-name"
            ><abbr title="Node.js">Node &gt;=8.7 &lt;8.10</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(46,100%,25%)">38</b>%</sup
          >
        </th>
        <th
          class="platform node8_10 engine"
          data-browser="node8_10"
          data-num="82"
          data-features="0.44167758846657934"
          data-flagged-features="0.5229357798165137"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 44%, transparent 44%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 52%, transparent 52%, transparent 100%);"
        >
          <a href="#node8_10" class="browser-name"
            ><abbr title="Node.js">Node &gt;=8.10 &lt;9</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(53,100%,25%)">44</b>%</sup
          >
        </th>
        <th
          class="platform node10_0 engine obsolete"
          data-browser="node10_0"
          data-num="83"
          data-features="0.5688073394495413"
          data-flagged-features="0.5688073394495413"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 56%, transparent 56%, transparent 100%);"
        >
          <a href="#node10_0" class="browser-name"
            ><abbr title="Node.js">Node &gt;=10.0 &lt;10.4</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(68,100%,25%)">56</b>%</sup
          >
        </th>
        <th
          class="platform node10_4 engine obsolete"
          data-browser="node10_4"
          data-num="84"
          data-features="0.6055045871559633"
          data-flagged-features="0.6238532110091743"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 60%, transparent 60%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 62%, transparent 62%, transparent 100%);"
        >
          <a href="#node10_4" class="browser-name"
            ><abbr title="Node.js">Node &gt;=10.4 &lt;10.9</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(72,100%,25%)">60</b>%</sup
          >
        </th>
        <th
          class="platform node10_9 engine"
          data-browser="node10_9"
          data-num="85"
          data-features="0.6422018348623854"
          data-flagged-features="0.6697247706422018"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 64%, transparent 64%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 66%, transparent 66%, transparent 100%);"
        >
          <a href="#node10_9" class="browser-name"
            ><abbr title="Node.js">Node &gt;=10.9 &lt;11</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(77,100%,25%)">64</b>%</sup
          >
        </th>
        <th
          class="platform node11_0 engine obsolete"
          data-browser="node11_0"
          data-num="86"
          data-features="0.6850152905198776"
          data-flagged-features="0.7308868501529051"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 68%, transparent 68%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 73%, transparent 73%, transparent 100%);"
        >
          <a href="#node11_0" class="browser-name"
            ><abbr title="Node.js">Node 11</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(82,100%,25%)">68</b>%</sup
          >
        </th>
        <th
          class="platform node12_0 engine obsolete"
          data-browser="node12_0"
          data-num="87"
          data-features="0.7614678899082569"
          data-flagged-features="0.8165137614678899"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 76%, transparent 76%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 81%, transparent 81%, transparent 100%);"
        >
          <a href="#node12_0" class="browser-name"
            ><abbr title="Node.js">Node 12.0-12.4</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(91,100%,25%)">76</b>%</sup
          >
        </th>
        <th
          class="platform node12_5 engine obsolete"
          data-browser="node12_5"
          data-num="88"
          data-features="0.7889908256880734"
          data-flagged-features="0.8256880733944955"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 78%, transparent 78%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 82%, transparent 82%, transparent 100%);"
        >
          <a href="#node12_5" class="browser-name"
            ><abbr title="Node.js">Node 12.5-12.8</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(94,100%,25%)">78</b>%</sup
          >
        </th>
        <th
          class="platform node12_9 engine obsolete"
          data-browser="node12_9"
          data-num="89"
          data-features="0.8073394495412844"
          data-flagged-features="0.8440366972477065"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#node12_9" class="browser-name"
            ><abbr title="Node.js">Node 12.9-12.10</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform node12_11 engine"
          data-browser="node12_11"
          data-num="90"
          data-features="0.8073394495412844"
          data-flagged-features="0.8440366972477065"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#node12_11" class="browser-name"
            ><abbr title="Node.js">Node &gt;=12.11 &lt;13</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform node13_0 engine"
          data-browser="node13_0"
          data-num="91"
          data-features="0.8073394495412844"
          data-flagged-features="0.8990825688073395"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 89%, transparent 89%, transparent 100%);"
        >
          <a href="#node13_0" class="browser-name"
            ><abbr title="Node.js">Node 13.0-13.1</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform node13_2 engine"
          data-browser="node13_2"
          data-num="92"
          data-features="0.8073394495412844"
          data-flagged-features="0.8990825688073395"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 89%, transparent 89%, transparent 100%);"
        >
          <a href="#node13_2" class="browser-name"
            ><abbr title="Node.js">Node &gt;=13.2 &lt;14</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform node14_0 engine"
          data-browser="node14_0"
          data-num="93"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#node14_0" class="browser-name"
            ><abbr title="Node.js">Node 14.0+</abbr></a
          ><a href="#harmony-flag-note"><sup>[2]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform duktape2_0 engine obsolete"
          data-browser="duktape2_0"
          data-num="94"
          data-features="0.033202271734381825"
          data-flagged-features="0.033202271734381825"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 3%, transparent 3%, transparent 100%);"
        >
          <a href="#duktape2_0" class="browser-name"
            ><abbr title="Duktape 2.0">DUK 2.0</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(3,100%,25%)">3</b>%</sup
          >
        </th>
        <th
          class="platform duktape2_1 engine obsolete"
          data-browser="duktape2_1"
          data-num="95"
          data-features="0.033202271734381825"
          data-flagged-features="0.033202271734381825"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 3%, transparent 3%, transparent 100%);"
        >
          <a href="#duktape2_1" class="browser-name"
            ><abbr title="Duktape 2.1">DUK 2.1</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(3,100%,25%)">3</b>%</sup
          >
        </th>
        <th
          class="platform duktape2_2 engine obsolete"
          data-browser="duktape2_2"
          data-num="96"
          data-features="0.04237658366098733"
          data-flagged-features="0.04237658366098733"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 4%, transparent 4%, transparent 100%);"
        >
          <a href="#duktape2_2" class="browser-name"
            ><abbr title="Duktape 2.2">DUK 2.2</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(5,100%,25%)">4</b>%</sup
          >
        </th>
        <th
          class="platform duktape2_3 engine"
          data-browser="duktape2_3"
          data-num="97"
          data-features="0.04237658366098733"
          data-flagged-features="0.04237658366098733"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 4%, transparent 4%, transparent 100%);"
        >
          <a href="#duktape2_3" class="browser-name"
            ><abbr title="Duktape 2.3">DUK 2.3</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(5,100%,25%)">4</b>%</sup
          >
        </th>
        <th
          class="platform jerryscript2_3_0 engine"
          data-browser="jerryscript2_3_0"
          data-num="98"
          data-features="0.0963302752293578"
          data-flagged-features="0.0963302752293578"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 9%, transparent 9%, transparent 100%);"
        >
          <a href="#jerryscript2_3_0" class="browser-name"
            ><abbr title="JerryScript 2.3.0">JrS 2.3.0</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(11,100%,25%)">9</b>%</sup
          >
        </th>
        <th
          class="platform graalvm19 engine"
          data-browser="graalvm19"
          data-num="99"
          data-features="0.753193020327397"
          data-flagged-features="0.753193020327397"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 75%, transparent 75%, transparent 100%);"
        >
          <a href="#graalvm19" class="browser-name"
            ><abbr title="GraalVM JavaScript 19.3.1">GraalVM 19.3.1</abbr></a
          ><a href="#graalvm-node-mode-note"><sup>[3]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(90,100%,25%)">75</b>%</sup
          >
        </th>
        <th
          class="platform graalvm20 engine obsolete"
          data-browser="graalvm20"
          data-num="100"
          data-features="0.7593092282784674"
          data-flagged-features="0.9244468429573665"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 75%, transparent 75%, transparent 100%), linear-gradient(to top, rgba(241, 219, 80, 0.2) 0%, rgba(241, 219, 80, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#graalvm20" class="browser-name"
            ><abbr title="GraalVM JavaScript 20.0.0">GraalVM 20.0.0</abbr></a
          ><a href="#graalvm-node-mode-note"><sup>[3]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(91,100%,25%)">75</b>%</sup
          >
        </th>
        <th
          class="platform graalvm20_1 engine"
          data-browser="graalvm20_1"
          data-num="101"
          data-features="0.8694009713977334"
          data-flagged-features="0.9244468429573665"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 86%, transparent 86%, transparent 100%), linear-gradient(to top, rgba(241, 219, 80, 0.2) 0%, rgba(241, 219, 80, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#graalvm20_1" class="browser-name"
            ><abbr title="GraalVM JavaScript 20.1.0">GraalVM 20.1.0</abbr></a
          ><a href="#graalvm-node-mode-note"><sup>[3]</sup></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">86</b>%</sup
          >
        </th>
        <th
          class="platform android4_4 mobile obsolete"
          data-browser="android4_4"
          data-num="102"
          data-features="0.021788990825688075"
          data-flagged-features="0.02408256880733945"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 2%, transparent 2%, transparent 100%), linear-gradient(to top, rgba(241, 219, 80, 0.2) 0%, rgba(241, 219, 80, 0.2) 2%, transparent 2%, transparent 100%);"
        >
          <a href="#android4_4" class="browser-name"
            ><abbr title="Android Browser 4.4 (KitKat)">AN 4.4</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(2,100%,25%)">2</b>%</sup
          >
        </th>
        <th
          class="platform android4_4_3 mobile obsolete"
          data-browser="android4_4_3"
          data-num="103"
          data-features="0.021788990825688075"
          data-flagged-features="0.02408256880733945"
          style="background-image: linear-gradient(to top, rgba(241, 219, 80, 0.5) 0%, rgba(241, 219, 80, 0.5) 2%, transparent 2%, transparent 100%), linear-gradient(to top, rgba(241, 219, 80, 0.2) 0%, rgba(241, 219, 80, 0.2) 2%, transparent 2%, transparent 100%);"
        >
          <a href="#android4_4_3" class="browser-name"
            ><abbr title="Android Browser 4.4.3 (KitKat)">AN 4.4.3</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(2,100%,25%)">2</b>%</sup
          >
        </th>
        <th
          class="platform ios10_3 mobile obsolete"
          data-browser="ios10_3"
          data-num="104"
          data-features="0.343188651607432"
          data-flagged-features="0.343188651607432"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 34%, transparent 34%, transparent 100%);"
        >
          <a href="#ios10_3" class="browser-name"
            ><abbr title="iOS Safari">iOS &gt;=10.3 &lt;11</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(41,100%,25%)">34</b>%</sup
          >
        </th>
        <th
          class="platform ios11 mobile obsolete"
          data-browser="ios11"
          data-num="105"
          data-features="0.35748978490478767"
          data-flagged-features="0.35748978490478767"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 35%, transparent 35%, transparent 100%);"
        >
          <a href="#ios11" class="browser-name"
            ><abbr title="iOS Safari">iOS 11</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(42,100%,25%)">35</b>%</sup
          >
        </th>
        <th
          class="platform ios11_3 mobile obsolete"
          data-browser="ios11_3"
          data-num="106"
          data-features="0.47837483617300136"
          data-flagged-features="0.47837483617300136"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 47%, transparent 47%, transparent 100%);"
        >
          <a href="#ios11_3" class="browser-name"
            ><abbr title="iOS Safari">iOS 11.3</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(57,100%,25%)">47</b>%</sup
          >
        </th>
        <th
          class="platform ios12 mobile"
          data-browser="ios12"
          data-num="107"
          data-features="0.5792922673656619"
          data-flagged-features="0.5792922673656619"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 57%, transparent 57%, transparent 100%);"
        >
          <a href="#ios12" class="browser-name"
            ><abbr title="iOS Safari">iOS 12</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(69,100%,25%)">57</b>%</sup
          >
        </th>
        <th
          class="platform ios12_2 mobile"
          data-browser="ios12_2"
          data-num="108"
          data-features="0.6404543468763653"
          data-flagged-features="0.6404543468763653"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 64%, transparent 64%, transparent 100%);"
        >
          <a href="#ios12_2" class="browser-name"
            ><abbr title="iOS Safari">iOS 12.2</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(76,100%,25%)">64</b>%</sup
          >
        </th>
        <th
          class="platform ios13 mobile"
          data-browser="ios13"
          data-num="109"
          data-features="0.7077326343381389"
          data-flagged-features="0.7077326343381389"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 70%, transparent 70%, transparent 100%);"
        >
          <a href="#ios13" class="browser-name"
            ><abbr title="iOS Safari">iOS 13</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(84,100%,25%)">70</b>%</sup
          >
        </th>
        <th
          class="platform ios13_4 mobile"
          data-browser="ios13_4"
          data-num="110"
          data-features="0.7903014416775884"
          data-flagged-features="0.7903014416775884"
          style="background-image: linear-gradient(to top, rgba(159, 172, 198, 0.5) 0%, rgba(159, 172, 198, 0.5) 79%, transparent 79%, transparent 100%);"
        >
          <a href="#ios13_4" class="browser-name"
            ><abbr title="iOS Safari">iOS 13.4</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(94,100%,25%)">79</b>%</sup
          >
        </th>
        <th
          class="platform samsung10 mobile obsolete"
          data-browser="samsung10"
          data-num="111"
          data-features="0.7033639143730887"
          data-flagged-features="0.7308868501529051"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 70%, transparent 70%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 73%, transparent 73%, transparent 100%);"
        >
          <a href="#samsung10" class="browser-name"
            ><abbr title="Samsung Internet for Android 10">Samsung 10</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(84,100%,25%)">70</b>%</sup
          >
        </th>
        <th
          class="platform samsung11 mobile"
          data-browser="samsung11"
          data-num="112"
          data-features="0.7889908256880734"
          data-flagged-features="0.8256880733944955"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 78%, transparent 78%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 82%, transparent 82%, transparent 100%);"
        >
          <a href="#samsung11" class="browser-name"
            ><abbr title="Samsung Internet for Android 11">Samsung 11</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(94,100%,25%)">78</b>%</sup
          >
        </th>
        <th
          class="platform samsung12 mobile"
          data-browser="samsung12"
          data-num="113"
          data-features="0.8073394495412844"
          data-flagged-features="0.8990825688073395"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 89%, transparent 89%, transparent 100%);"
        >
          <a href="#samsung12" class="browser-name"
            ><abbr title="Samsung Internet for Android 12">Samsung 12</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform samsung13 mobile unstable"
          data-browser="samsung13"
          data-num="114"
          data-features="0.8715596330275229"
          data-flagged-features="0.926605504587156"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 87%, transparent 87%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 92%, transparent 92%, transparent 100%);"
        >
          <a href="#samsung13" class="browser-name"
            ><abbr title="Samsung Internet for Android 13"
              >Samsung 13 Beta</abbr
            ></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(104,100%,25%)">87</b>%</sup
          >
        </th>
        <th
          class="platform opera_mobile51 mobile obsolete"
          data-browser="opera_mobile51"
          data-num="115"
          data-features="0.7217125382262997"
          data-flagged-features="0.7492354740061161"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 72%, transparent 72%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 74%, transparent 74%, transparent 100%);"
        >
          <a href="#opera_mobile51" class="browser-name"
            ><abbr title="Opera Mobile for Android 51">Opera Mobile 51</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(86,100%,25%)">72</b>%</sup
          >
        </th>
        <th
          class="platform opera_mobile52 mobile obsolete"
          data-browser="opera_mobile52"
          data-num="116"
          data-features="0.7614678899082569"
          data-flagged-features="0.7798165137614679"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 76%, transparent 76%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 77%, transparent 77%, transparent 100%);"
        >
          <a href="#opera_mobile52" class="browser-name"
            ><abbr title="Opera Mobile for Android 52">Opera Mobile 52</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(91,100%,25%)">76</b>%</sup
          >
        </th>
        <th
          class="platform opera_mobile53 mobile obsolete"
          data-browser="opera_mobile53"
          data-num="117"
          data-features="0.7614678899082569"
          data-flagged-features="0.8165137614678899"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 76%, transparent 76%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 81%, transparent 81%, transparent 100%);"
        >
          <a href="#opera_mobile53" class="browser-name"
            ><abbr title="Opera Mobile for Android 53">Opera Mobile 53</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(91,100%,25%)">76</b>%</sup
          >
        </th>
        <th
          class="platform opera_mobile54 mobile"
          data-browser="opera_mobile54"
          data-num="118"
          data-features="0.8073394495412844"
          data-flagged-features="0.8440366972477065"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#opera_mobile54" class="browser-name"
            ><abbr title="Opera Mobile for Android 54">Opera Mobile 54</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
        <th
          class="platform opera_mobile55 mobile"
          data-browser="opera_mobile55"
          data-num="119"
          data-features="0.8073394495412844"
          data-flagged-features="0.8440366972477065"
          style="background-image: linear-gradient(to top, rgba(129, 189, 0, 0.5) 0%, rgba(129, 189, 0, 0.5) 80%, transparent 80%, transparent 100%), linear-gradient(to top, rgba(129, 189, 0, 0.2) 0%, rgba(129, 189, 0, 0.2) 84%, transparent 84%, transparent 100%);"
        >
          <a href="#opera_mobile55" class="browser-name"
            ><abbr title="Opera Mobile for Android 55">Opera Mobile 55</abbr></a
          ><sup class="num-features" title="Number of implemented features"
            ><b style="color:hsl(96,100%,25%)">80</b>%</sup
          >
        </th>
      </tr>
    </thead>

    <tr class="category">
      <td colspan="45">2016 features</td>
    </tr>

    <tr class="supertest" significance="0.25">
      <td id="test-exponentiation_(**)_operator">
        <span
          ><a class="anchor" href="#test-exponentiation_(**)_operator">§</a
          ><a
            href="http://www.ecma-international.org/ecma-262/7.0/index.html#sec-exp-operator"
            >exponentiation (**) operator</a
          >
          >&nbsp;</span
        ><span class="folddown">►</span>
      </td>
      <td
        class="tally current"
        data-tally="1"
        style="background-color:hsl(120,42%,50%)"
      >
        3/3
      </td>
      <td></td>
      <td
        class="tally obsolete"
        data-browser="tr"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td class="tally obsolete" data-browser="babel6corejs2" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="babel7corejs2" data-tally="1">
        3/3
      </td>
      <td class="tally" data-browser="babel7corejs3" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="closure" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="closure20190121" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="closure20190709" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="closure20191027" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="closure20200101" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="closure20200112" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="closure20200315" data-tally="1">
        3/3
      </td>
      <td class="tally" data-browser="closure20200517" data-tally="1">3/3</td>
      <td
        class="tally obsolete"
        data-browser="typescript1corejs2"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally obsolete"
        data-browser="typescript2_9corejs2"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally obsolete"
        data-browser="typescript3_2corejs2"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally obsolete"
        data-browser="typescript3_6corejs3"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally obsolete"
        data-browser="typescript3_7corejs3"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally obsolete"
        data-browser="typescript3_8corejs3"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally obsolete"
        data-browser="typescript3_9corejs3"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally"
        data-browser="typescript4corejs3"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td class="tally" data-browser="es7shim" data-tally="0">0/3</td>
      <td class="tally" data-browser="ie11" data-tally="0">0/3</td>
      <td class="tally obsolete" data-browser="firefox68" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="firefox69" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="firefox70" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="firefox71" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="firefox72" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="firefox73" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="firefox74" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="firefox75" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="firefox76" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="firefox77" data-tally="1">
        3/3
      </td>
      <td class="tally" data-browser="firefox78" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="firefox79" data-tally="1">
        3/3
      </td>
      <td class="tally" data-browser="firefox80" data-tally="1">3/3</td>
      <td class="tally" data-browser="firefox81" data-tally="1">3/3</td>
      <td class="tally unstable" data-browser="firefox82" data-tally="1">
        3/3
      </td>
      <td class="tally unstable" data-browser="firefox83" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="opera12_10" data-tally="0">
        0/3
      </td>
      <td class="tally obsolete" data-browser="chrome77" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="chrome78" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="chrome79" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="chrome80" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="chrome81" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="chrome83" data-tally="1">3/3</td>
      <td class="tally" data-browser="chrome84" data-tally="1">3/3</td>
      <td class="tally" data-browser="chrome85" data-tally="1">3/3</td>
      <td class="tally unstable" data-browser="chrome86" data-tally="1">3/3</td>
      <td class="tally unstable" data-browser="chrome87" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="edge17" data-tally="1">3/3</td>
      <td class="tally" data-browser="edge18" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="edge79" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="edge80" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="edge81" data-tally="1">3/3</td>
      <td class="tally" data-browser="edge83" data-tally="1">3/3</td>
      <td class="tally" data-browser="edge84" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="safari12" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="safari12_1" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="safari13" data-tally="1">3/3</td>
      <td class="tally" data-browser="safari13_1" data-tally="1">3/3</td>
      <td class="tally" data-browser="safari14" data-tally="1">3/3</td>
      <td class="tally unstable" data-browser="safaritp" data-tally="1">3/3</td>
      <td class="tally unstable" data-browser="webkit" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="opera63" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="opera64" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="opera65" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="opera66" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="opera67" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="opera68" data-tally="1">3/3</td>
      <td class="tally" data-browser="opera69" data-tally="1">3/3</td>
      <td class="tally" data-browser="opera70" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="phantom2_1" data-tally="0">
        0/3
      </td>
      <td class="tally obsolete" data-browser="node0_10" data-tally="0">0/3</td>
      <td class="tally obsolete" data-browser="node0_12" data-tally="0">0/3</td>
      <td class="tally obsolete" data-browser="node4" data-tally="0">0/3</td>
      <td
        class="tally obsolete"
        data-browser="node6_5"
        data-tally="0"
        data-flagged-tally="1"
      >
        0/3
      </td>
      <td class="tally obsolete" data-browser="node7" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node7_6" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node8" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node8_3" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node8_7" data-tally="1">3/3</td>
      <td class="tally" data-browser="node8_10" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node10_0" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node10_4" data-tally="1">3/3</td>
      <td class="tally" data-browser="node10_9" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node11_0" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node12_0" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node12_5" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="node12_9" data-tally="1">3/3</td>
      <td class="tally" data-browser="node12_11" data-tally="1">3/3</td>
      <td class="tally" data-browser="node13_0" data-tally="1">3/3</td>
      <td class="tally" data-browser="node13_2" data-tally="1">3/3</td>
      <td class="tally" data-browser="node14_0" data-tally="1">3/3</td>
      <td
        class="tally obsolete"
        data-browser="duktape2_0"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally obsolete"
        data-browser="duktape2_1"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally obsolete"
        data-browser="duktape2_2"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td
        class="tally"
        data-browser="duktape2_3"
        data-tally="0.6666666666666666"
        style="background-color:hsl(80,56%,50%)"
      >
        2/3
      </td>
      <td class="tally" data-browser="jerryscript2_3_0" data-tally="1">3/3</td>
      <td class="tally" data-browser="graalvm19" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="graalvm20" data-tally="1">
        3/3
      </td>
      <td class="tally" data-browser="graalvm20_1" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="android4_4" data-tally="0">
        0/3
      </td>
      <td class="tally obsolete" data-browser="android4_4_3" data-tally="0">
        0/3
      </td>
      <td class="tally obsolete" data-browser="ios10_3" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="ios11" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="ios11_3" data-tally="1">3/3</td>
      <td class="tally" data-browser="ios12" data-tally="1">3/3</td>
      <td class="tally" data-browser="ios12_2" data-tally="1">3/3</td>
      <td class="tally" data-browser="ios13" data-tally="1">3/3</td>
      <td class="tally" data-browser="ios13_4" data-tally="1">3/3</td>
      <td class="tally obsolete" data-browser="samsung10" data-tally="1">
        3/3
      </td>
      <td class="tally" data-browser="samsung11" data-tally="1">3/3</td>
      <td class="tally" data-browser="samsung12" data-tally="1">3/3</td>
      <td class="tally unstable" data-browser="samsung13" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="opera_mobile51" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="opera_mobile52" data-tally="1">
        3/3
      </td>
      <td class="tally obsolete" data-browser="opera_mobile53" data-tally="1">
        3/3
      </td>
      <td class="tally" data-browser="opera_mobile54" data-tally="1">3/3</td>
      <td class="tally" data-browser="opera_mobile55" data-tally="1">3/3</td>
    </tr>
  </v-app>
</template>

<script>
var i;
//  インポート
export default {
  FBSyasData: [],
  FBitem: null,
  created() {},
  data() {
    return {
      cells: [{ num: "" }],
    };
  },
  methods: {
    beforeMount() {
      i = 80;
      while (i--) {
        this.cells.push({
          num: "",
        });
      }
    },
    mounted: function() {
      var boxes = document.getElementsByClassName("cell");
      i = boxes.length;
      while (i--) {
        boxes[i].id = "cell" + i;
      }
    },
  },
};


</script>

<style lang="scss" scoped>
body,ul,li,p{padding:0;margin:0px;}
ul,li{list-style-type: none;}

#acc {
	margin:10px 0 0;
	clear: both;
}

#acc li ul {
	display: none;
	font-size:16px;
	line-height:30px;
}

#acc p{
	background-color:#FF6;
	cursor:pointer;
	padding:5px;
	height:30px;
	user-select: none;
	font-size:16px;
	line-height:30px;
	border: solid 1px #FFF;
}
#acc .p2{
	background-color:#DD4;
}

#acc li{
	padding:5px;
	margin-left:5px;
	display: block;
}

</style>
