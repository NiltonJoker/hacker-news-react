import { Hit } from "../interfaces";

export const SELECT_OPTIONS = [
  {
    label: "Select your news",
    value: "",
  },
  {
    label: "Angular",
    value: "angular",
  },
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
];

export const exampleData: Hit[] =[
    {
      created_at: "2022-05-15T07:13:43.000Z",
      title: null,
      url: null,
      author: "Hermitian909",
      points: null,
      story_text: null,
      comment_text: "&gt; Nearly all jobs applied are for software engineering. 95% are mid-level or lower rest are senior-level (just to feel things out). I might get as far as 3 rounds with a few interviews.<p>This stands out as the most likely reason you are not finding any interest. 10 years of experience and not being senior is a massive red flag. While it may not be true, the <i>signal</i> that sends is that you&#x27;re uninterested in or incapable of growth. You need to do something to combat that perception. I would recommend either:<p>1. Applying to senior positions only\n2. Hiding your years of experience during the interview process<p>&gt;  I would count at least 2000 applications from 2015 onward<p>This should tell you that your resume is not interest, consider finding and paying someone specializing in tech resumes to polish yours.<p>If you&#x27;re sufficiently dedicated, a much more extreme option is to move to the bay area and start socializing. Show up to a few regular meetups and charm the right people and it you can get referrals to a dozen tech companies.",
      num_comments: null,
      story_id: 31383700,
      story_title: "Ask HN: Self-taught roadmap to multiple big tech offers in a few years?",
      story_url: null,
      parent_id: 31384782,
      created_at_i: 1652598823,
      _tags: [
        "comment",
        "author_Hermitian909",
        "story_31383700"
      ],
      objectID: "31385827",
      _highlightResult: {
        author: {
          value: "Hermitian909",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "&gt; Nearly all jobs applied are for software engineering. 95% are mid-level or lower rest are senior-level (just to feel things out). I might get as far as 3 rounds with a few interviews.<p>This stands out as the most likely reason you are not finding any interest. 10 years of experience and not being senior is a massive red flag. While it may not be true, the <i>signal</i> that sends is that you're uninterested in or incapable of growth. You need to do something to combat that perception. I would recommend either:<p>1. Applying to senior positions only\n2. Hiding your years of experience during the interview process<p>&gt;  I would count at least 2000 applications from 2015 onward<p>This should tell you that your resume is not interest, consider finding and paying someone specializing in tech resumes to polish yours.<p>If you're sufficiently dedicated, a much more extreme option is to move to the bay area and start socializing. Show up to a few <em>regular</em> meetups and charm the right people and it you can get referrals to a dozen tech companies",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Ask HN: Self-taught roadmap to multiple big tech offers in a few years?",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T07:09:22.000Z",
      title: null,
      url: null,
      author: "ant1oz",
      points: null,
      story_text: null,
      comment_text: "It is you.<p>Vue3 sounds perfect, The major upgrade from v2 is the use of Proxies (<a href=\"https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;JavaScript&#x2F;Reference&#x2F;Global_Objects&#x2F;Proxy\" rel=\"nofollow\">https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;JavaScript&#x2F;Refe...</a>), which was missing at the time of Angular v1, which enables native dual binding - and global dual binded deep complex objects.<p>I personally think React is way over-complicated - and was solving a debugging problem in 2015 - when proxy were not around.<p>Now look at this vue3 code, and please try to do the same with React<p><pre><code>    &#x2F;&#x2F; file A.js - uses the basic vue proxy implementation\n\n    import {ref} from &#x27;vue&#x27;;\n    export const a = ref([])\n    a.value.push(1)\n\n    &#x2F;&#x2F; &#x27;a&#x27; could be a complex library - that is self contained.\n\n    &#x2F;&#x2F; file B.vue - the actual .vue component\n\n    &lt;template&gt;\n       &lt;ul&gt;\n        &lt;li v-for=&quot;(key, value) in arr&quot;&gt;\n          {{key}}=&gt;{{value}}\n        &lt;&#x2F;li&gt;\n      &lt;&#x2F;ul&gt;\n      &lt;button @click=&quot;add()&quot;&gt;Add element&lt;&#x2F;button&gt;\n    &lt;&#x2F;template&gt;\n\n    &lt;script&gt;\n    import {a} from A.js\n    component(&#x27;hello&#x27;, {\n      setup() {\n        const add = () =&gt; a.push(a.length+1)\n        return {\n          arr: a, \n          add\n        };\n    }\n   });\n</code></pre>\n&#x2F;* No props here, it uses a global object\nFor example, you could have a library that keeps an array of loggedin friends, that connects to websockets - and updates in real time - totally external to the vue UI. All you need is to import it - no need to pass it as a prop - or dependency inject it the angular2+ way\n*&#x2F;<p>This is simply not possible to do this with React, instead everything needs to be passed as props, or context. Hooks are even harder than that - as the side effect detection (by design) is dependent on the order of the hook declaration - making the actual reusability of the whole hook ecosystem quite complex and subject to headaches.<p>Also, keep in mind that Vue3 is now more popular than Angular2, and that it reaches the same number of stars on Github than React - while the number of developers being proficient with Vue is way lower.<p>In my own personal experience, developing a complex webapp with Vue is way easier than with React - and the developers familiar with it are usually way more experienced than the React uni under-graduate (pretending to be senior full stack developers - because they can write node.js - and spawn a firebase google hosted instance) - because those Vue devs - they know - and because they know - they choose Vue.<p>Vue4 engine - IMHO - could be written in Rust and compiled to web-assembly - if that makes sense in term of performances.",
      num_comments: null,
      story_id: 31385584,
      story_title: "Vue3/Nuxt3 poor adoption compared to React",
      story_url: null,
      parent_id: 31385584,
      created_at_i: 1652598562,
      _tags: [
        "comment",
        "author_ant1oz",
        "story_31385584"
      ],
      objectID: "31385804",
      _highlightResult: {
        author: {
          value: "ant1oz",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "It is you.<p>Vue3 sounds perfect, The major upgrade from v2 is the use of Proxies (<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy\" rel=\"nofollow\">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refe...</a>), which was missing at the time of <em>Angular</em> v1, which enables native dual binding - and global dual binded deep complex objects.<p>I personally think React is way over-complicated - and was solving a debugging problem in 2015 - when proxy were not around.<p>Now look at this vue3 code, and please try to do the same with React<p><pre><code>    // file A.js - uses the basic vue proxy implementation\n\n    import {ref} from 'vue';\n    export const a = ref([])\n    a.value.push(1)\n\n    // 'a' could be a complex library - that is self contained.\n\n    // file B.vue - the actual .vue component\n\n    &lt;template&gt;\n       &lt;ul&gt;\n        &lt;li v-for=&quot;(key, value) in arr&quot;&gt;\n          {{key}}=&gt;{{value}}\n        &lt;/li&gt;\n      &lt;/ul&gt;\n      &lt;button @click=&quot;add()&quot;&gt;Add element&lt;/button&gt;\n    &lt;/template&gt;\n\n    &lt;script&gt;\n    import {a} from A.js\n    component('hello', {\n      setup() {\n        const add = () =&gt; a.push(a.length+1)\n        return {\n          arr: a, \n          add\n        };\n    }\n   });\n</code></pre>\n/* No props here, it uses a global object\nFor example, you could have a library that keeps an array of loggedin friends, that connects to websockets - and updates in real time - totally external to the vue UI. All you need is to import it - no need to pass it as a prop - or dependency inject it the <em>angular</em>2+ way\n*/<p>This is simply not possible to do this with React, instead everything needs to be passed as props, or context. Hooks are even harder than that - as the side effect detection (by design) is dependent on the order of the hook declaration - making the actual reusability of the whole hook ecosystem quite complex and subject to headaches.<p>Also, keep in mind that Vue3 is now more popular than <em>Angular</em>2, and that it reaches the same number of stars on Github than React - while the number of developers being proficient with Vue is way lower.<p>In my own personal experience, developing a complex webapp with Vue is way easier than with React - and the developers familiar with it are usually way more experienced than the React uni under-graduate (pretending to be senior full stack developers - because they can write node.js - and spawn a firebase google hosted instance) - because those Vue devs - they know - and because they know - they choose Vue.<p>Vue4 engine - IMHO - could be written in Rust and compiled to web-assembly - if that makes sense in term of performances.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Vue3/Nuxt3 poor adoption compared to React",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T06:31:46.000Z",
      title: null,
      url: null,
      author: "rklaehn",
      points: null,
      story_text: null,
      comment_text: "I tried this with real data (Satellite and Columbus module telemetry). At least for the timestamps, it is always a big win, because values are typically being sampled at a precisely or at least somewhat regular frequency.<p>For sample values, it is not as clear cut. The best way I found is to just try both approaches and use the one that results in better compression, if you can afford it. But for values I usually don&#x27;t bother.",
      num_comments: null,
      story_id: 31379344,
      story_title: "Time-Series Compression Algorithms",
      story_url: "https://www.timescale.com/blog/time-series-compression-algorithms-explained/",
      parent_id: 31385628,
      created_at_i: 1652596306,
      _tags: [
        "comment",
        "author_rklaehn",
        "story_31379344"
      ],
      objectID: "31385674",
      _highlightResult: {
        author: {
          value: "rklaehn",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "I tried this with real data (Satellite and Columbus module telemetry). At least for the timestamps, it is always a big win, because values are typically being sampled at a precisely or at least somewhat <em>regular</em> frequency.<p>For sample values, it is not as clear cut. The best way I found is to just try both approaches and use the one that results in better compression, if you can afford it. But for values I usually don't bother.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Time-Series Compression Algorithms",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://www.timescale.com/blog/time-series-compression-algorithms-explained/",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T06:28:55.000Z",
      title: null,
      url: null,
      author: "no_time",
      points: null,
      story_text: null,
      comment_text: "That&#x27;s like... the worst of both worlds? You get a worse dev experience compared to regular js and your users get a memory hog that makes their machines go whirrrr instead of a snappy, lightweight Qt program.",
      num_comments: null,
      story_id: 31368209,
      story_title: "Quick Start Guide for Flipper Zero",
      story_url: "https://blog.flipperzero.one/quick-start-guide-and-shipping-update/",
      parent_id: 31373305,
      created_at_i: 1652596135,
      _tags: [
        "comment",
        "author_no_time",
        "story_31368209"
      ],
      objectID: "31385661",
      _highlightResult: {
        author: {
          value: "no_time",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "That's like... the worst of both worlds? You get a worse dev experience compared to <em>regular</em> js and your users get a memory hog that makes their machines go whirrrr instead of a snappy, lightweight Qt program.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Quick Start Guide for Flipper Zero",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://blog.flipperzero.one/quick-start-guide-and-shipping-update/",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T03:27:50.000Z",
      title: null,
      url: null,
      author: "stevenicr",
      points: null,
      story_text: null,
      comment_text: "A couple things I wonder about, and maybe someone has research on them(?)<p>Are many of us hungry because the food we are eating does not have the same vitamins &#x2F; other nutrients that we used to get from more whole foods?<p>From craving a sunkist &#x2F; orange drink and consuming it - only to want more later - is this craving the nutrients in oranges &#x2F; fruit and we eat something to satisfy the immediate hunger then long for more cuz it didn&#x27;t absorb from what we ate?<p>From processed shelf stable food, to industrial farmed foods that may sometime have less nutrients that a properly feed vegetable - we must be getting less vitamins and minerals even if we are getting some tomatoes slices and such in the meals right?<p>I also have though for a long time that if there was less stigma for mood altering things.. some people I have known would eat ice cream regularly in a way that I think if they had the ability to smoke a joint they would not.. or find some other solace from counseling to spiritual stuff or exercise or mushrooms or whatever... I think we as a society do not have enough socially acceptable &#x2F; sanctioned things to do to release stress &#x2F; feel better doing things.. and what is it in ice cream that makes you feel different?<p>chocolate too - is it dl-phenalmymine or something like that, it gives you a feeling everything is better &#x2F; love feels a little? - you can buy that as a pill instead of consuming the calories for the feels - but it&#x27;s not a popular thing.<p>For some it&#x27;s socially acceptable to reach for a beer or benzos, but I think we need better options, both short term feels and longer terms heals.<p>random thoughts I hope someone else has found more info on.",
      num_comments: null,
      story_id: 31381410,
      story_title: "You're Not Losing Fat Because You're Eating Too Damn Much (2016)",
      story_url: "https://physiqonomics.com/eating-too-much/",
      parent_id: 31381410,
      created_at_i: 1652585270,
      _tags: [
        "comment",
        "author_stevenicr",
        "story_31381410"
      ],
      objectID: "31385021",
      _highlightResult: {
        author: {
          value: "stevenicr",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "A couple things I wonder about, and maybe someone has research on them(?)<p>Are many of us hungry because the food we are eating does not have the same vitamins / other nutrients that we used to get from more whole foods?<p>From craving a sunkist / orange drink and consuming it - only to want more later - is this craving the nutrients in oranges / fruit and we eat something to satisfy the immediate hunger then long for more cuz it didn't absorb from what we ate?<p>From processed shelf stable food, to industrial farmed foods that may sometime have less nutrients that a properly feed vegetable - we must be getting less vitamins and minerals even if we are getting some tomatoes slices and such in the meals right?<p>I also have though for a long time that if there was less stigma for mood altering things.. some people I have known would eat ice cream <em>regular</em>ly in a way that I think if they had the ability to smoke a joint they would not.. or find some other solace from counseling to spiritual stuff or exercise or mushrooms or whatever... I think we as a society do not have enough socially acceptable / sanctioned things to do to release stress / feel better doing things.. and what is it in ice cream that makes you feel different?<p>chocolate too - is it dl-phenalmymine or something like that, it gives you a feeling everything is better / love feels a little? - you can buy that as a pill instead of consuming the calories for the feels - but it's not a popular thing.<p>For some it's socially acceptable to reach for a beer or benzos, but I think we need better options, both short term feels and longer terms heals.<p>random thoughts I hope someone else has found more info on.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "You're Not Losing Fat Because You're Eating Too Damn Much (2016)",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://physiqonomics.com/eating-too-much/",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T02:22:07.000Z",
      title: null,
      url: null,
      author: "sliken",
      points: null,
      story_text: null,
      comment_text: "Anything coming anywhere close to the event horizon would be removed, and some fraction of that mass would be converted into energy an irradiate the surrounding.  So the best you could hope for is that it&#x27;s moving fast, leaves a hole in you and leaves fast before you die.<p>Keep in mind that event horizon isn&#x27;t a shell, just a point at which your future (which is in the singularity) is certain.",
      num_comments: null,
      story_id: 31377395,
      story_title: "Can we make a black hole? And if we could, what could we do with it?",
      story_url: "http://backreaction.blogspot.com/2022/05/can-we-make-black-hole-and-if-we-could.html",
      parent_id: 31378564,
      created_at_i: 1652581327,
      _tags: [
        "comment",
        "author_sliken",
        "story_31377395"
      ],
      objectID: "31384706",
      _highlightResult: {
        author: {
          value: "sliken",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "Anything coming anywhere close to the event horizon would be removed, and some fraction of that mass would be converted into energy an irradiate the surrounding.  So the best you could hope for is that it's moving fast, leaves a hole in you and leaves fast before you die.<p>Keep in mind that event horizon isn't a shell, just a point at which your future (which is in the <em>singular</em>ity) is certain.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Can we make a black hole? And if we could, what could we do with it?",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "http://backreaction.blogspot.com/2022/05/can-we-make-black-hole-and-if-we-could.html",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T01:18:25.000Z",
      title: "Regular Expression Matching Can Be Simple and Fast",
      url: "https://swtch.com/~rsc/regexp/regexp1.html",
      author: "BipolarCapybara",
      points: 2,
      story_text: null,
      comment_text: null,
      num_comments: 0,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1652577505,
      _tags: [
        "story",
        "author_BipolarCapybara",
        "story_31384376"
      ],
      objectID: "31384376",
      _highlightResult: {
        title: {
          value: "<em>Regular</em> Expression Matching Can Be Simple and Fast",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        url: {
          value: "https://swtch.com/~rsc/regexp/regexp1.html",
          matchLevel: "none",
          matchedWords: []
        },
        author: {
          value: "BipolarCapybara",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T01:14:45.000Z",
      title: null,
      url: null,
      author: "PragmaticPulp",
      points: null,
      story_text: null,
      comment_text: "Comments like these are baffling. Where are people finding these psychiatrists who are blindly writing prescriptions and sending people out the door?<p>Around here (US location) my medical professional friends are all hesitant to prescribe any controlled substances to more than a certain number of their patients for fear of getting flagged.<p>Whenever I read these stories of people receiving benzos and other scheduled substances for years with no oversight, I can’t tell if this is actually happening regularly somewhere or if we’re just reading a lot of exaggerated second-hand stories.<p>I know these things happen <i>somewhere, sometimes</i> but the insinuation that it’s just the norm in American medicine is baffling.",
      num_comments: null,
      story_id: 31382096,
      story_title: "Long-term benzodiazepine use causes synapse loss and cognitive deficits in mice",
      story_url: "https://scitechdaily.com/long-term-benzodiazepine-xanax-klonopin-ativan-use-destroys-neural-connections-in-the-brain/",
      parent_id: 31382717,
      created_at_i: 1652577285,
      _tags: [
        "comment",
        "author_PragmaticPulp",
        "story_31382096"
      ],
      objectID: "31384354",
      _highlightResult: {
        author: {
          value: "PragmaticPulp",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "Comments like these are baffling. Where are people finding these psychiatrists who are blindly writing prescriptions and sending people out the door?<p>Around here (US location) my medical professional friends are all hesitant to prescribe any controlled substances to more than a certain number of their patients for fear of getting flagged.<p>Whenever I read these stories of people receiving benzos and other scheduled substances for years with no oversight, I can’t tell if this is actually happening <em>regular</em>ly somewhere or if we’re just reading a lot of exaggerated second-hand stories.<p>I know these things happen <i>somewhere, sometimes</i> but the insinuation that it’s just the norm in American medicine is baffling.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Long-term benzodiazepine use causes synapse loss and cognitive deficits in mice",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://scitechdaily.com/long-term-benzodiazepine-xanax-klonopin-ativan-use-destroys-neural-connections-in-the-brain/",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T00:51:00.000Z",
      title: null,
      url: null,
      author: "samatman",
      points: null,
      story_text: null,
      comment_text: "Regexes in the Unix tradition are a user interface as much as a programming language.  Not that there&#x27;s a sharp distinction, but it&#x27;s almost a trite observation that regexes <i>per se</i> shine for ad hoc string searching but show their weakness when they start becoming parts of programs.<p>When writing a program, I prefer to use a PEG, giving the less compact notation `&#x27;a&#x27;* &#x27;b&#x27;` but also letting me say `&#x27;a&#x27;* b` and define b as its own rule, including recursion for the useful cases.  It helps that it&#x27;s more powerful, being little more than a formalization of the post-regular strategies used in Perl-style &#x27;regular&#x27; expressions while embracing recursion.<p>For &#x27;&#x2F;&#x27; in vim, grep, wherever? Yeah regex is fine, that&#x27;s what it was designed for.",
      num_comments: null,
      story_id: 31377262,
      story_title: "Thinking in an array language",
      story_url: "https://github.com/razetime/ngn-k-tutorial/blob/main/c-thinking-in-k.md",
      parent_id: 31383604,
      created_at_i: 1652575860,
      _tags: [
        "comment",
        "author_samatman",
        "story_31377262"
      ],
      objectID: "31384228",
      _highlightResult: {
        author: {
          value: "samatman",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "Regexes in the Unix tradition are a user interface as much as a programming language.  Not that there's a sharp distinction, but it's almost a trite observation that regexes <i>per se</i> shine for ad hoc string searching but show their weakness when they start becoming parts of programs.<p>When writing a program, I prefer to use a PEG, giving the less compact notation `'a'* 'b'` but also letting me say `'a'* b` and define b as its own rule, including recursion for the useful cases.  It helps that it's more powerful, being little more than a formalization of the post-<em>regular</em> strategies used in Perl-style '<em>regular</em>' expressions while embracing recursion.<p>For '/' in vim, grep, wherever? Yeah regex is fine, that's what it was designed for.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Thinking in an array language",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://github.com/razetime/ngn-k-tutorial/blob/main/c-thinking-in-k.md",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T00:43:16.000Z",
      title: null,
      url: null,
      author: "sudosysgen",
      points: null,
      story_text: null,
      comment_text: "Antidrone warfare is very very difficult. They are small and go slow and are thus difficult to shoot down. See how Iraqi militias fly drones into US bases and how Hezbollah regularly flies drone into Israel unpunished (sometimes Israel even has to resort to fighter jets to shoot them down).",
      num_comments: null,
      story_id: 31382372,
      story_title: "Shaped Charges – Sheet of copper going through 1ft of solid steel (2010) [video]",
      story_url: "https://www.youtube.com/watch?v=K-3cTsvI7ss",
      parent_id: 31382945,
      created_at_i: 1652575396,
      _tags: [
        "comment",
        "author_sudosysgen",
        "story_31382372"
      ],
      objectID: "31384187",
      _highlightResult: {
        author: {
          value: "sudosysgen",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "Antidrone warfare is very very difficult. They are small and go slow and are thus difficult to shoot down. See how Iraqi militias fly drones into US bases and how Hezbollah <em>regular</em>ly flies drone into Israel unpunished (sometimes Israel even has to resort to fighter jets to shoot them down).",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Shaped Charges – Sheet of copper going through 1ft of solid steel (2010) [video]",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://www.youtube.com/watch?v=K-3cTsvI7ss",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T00:24:11.000Z",
      title: null,
      url: null,
      author: "ineedasername",
      points: null,
      story_text: null,
      comment_text: "<i>&gt;sleep-inducing dosage</i><p>I don&#x27;t know why benzos are used for sleep anymore. It&#x27;s generally a higher dose than what&#x27;s needed to manage anxiety, so there&#x27;s increased risk of dependency and you build up tolerance quickly.<p>In contrast, something like a low dose of Seroquel is at least as effective, has a much lower addictions &amp; abuse profile, and tolerance doesn&#x27;t build up very quickly at all.<p>On top of which there should very rarely be any need for regular sleep aids. Chronic idiopathic insomnia is relatively rare, and any other forms should have treatment protocols that don&#x27;t involve heavy duty maintenance meds.",
      num_comments: null,
      story_id: 31382096,
      story_title: "Long-term benzodiazepine use causes synapse loss and cognitive deficits in mice",
      story_url: "https://scitechdaily.com/long-term-benzodiazepine-xanax-klonopin-ativan-use-destroys-neural-connections-in-the-brain/",
      parent_id: 31382096,
      created_at_i: 1652574251,
      _tags: [
        "comment",
        "author_ineedasername",
        "story_31382096"
      ],
      objectID: "31384073",
      _highlightResult: {
        author: {
          value: "ineedasername",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "<i>&gt;sleep-inducing dosage</i><p>I don't know why benzos are used for sleep anymore. It's generally a higher dose than what's needed to manage anxiety, so there's increased risk of dependency and you build up tolerance quickly.<p>In contrast, something like a low dose of Seroquel is at least as effective, has a much lower addictions &amp; abuse profile, and tolerance doesn't build up very quickly at all.<p>On top of which there should very rarely be any need for <em>regular</em> sleep aids. Chronic idiopathic insomnia is relatively rare, and any other forms should have treatment protocols that don't involve heavy duty maintenance meds.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Long-term benzodiazepine use causes synapse loss and cognitive deficits in mice",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://scitechdaily.com/long-term-benzodiazepine-xanax-klonopin-ativan-use-destroys-neural-connections-in-the-brain/",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T00:19:26.000Z",
      title: null,
      url: null,
      author: "yowlingcat",
      points: null,
      story_text: null,
      comment_text: "It&#x27;s hard to give advice as you haven&#x27;t given a sense of what your career and academic history looks like. Some questions:<p>- Are you self taught?<p>- Do you have a bachelor&#x27;s degree? One in CS?<p>- What does your work history look like; have you been full-time employed at any point since entering the work force or has it always been part time contract work?<p>- Most importantly, why have you only done contract work -- is there something that has prevented you over the course of the last decade from applying to and succeeding in full-time work?<p>- Do you simply not want it, have you tried it and it hasn&#x27;t worked out, perhaps a combination of the two?<p>Based on that you can determine what your next paths forward are.<p>One approach is applicable if the will to work in a professional capacity is there, as well as the capability, and that all that&#x27;s missing is that, for lack of a better term, you&#x27;ve been on &quot;sabbatical.&quot; If that&#x27;s the case, doing work on Toptal&#x2F;Gun.IO&#x2F;Facet (probably would recommend any of those over Upwork although it is an option of last resort). You should be able to get a decent stream of contract work that way, sharpen your skills and then eventually move to a FT position from there. The most important thing is to get into a rhythm where you are doing work on a regular basis that is useful to your employer so that you have something of value for when you decide to move.<p>Another approach is taking a reset because you can&#x27;t do the former. Ways to do a reset include either a bootcamp or an MS program (assuming you have a bachelor&#x27;s; if not, the bachelor&#x27;s is an option), as both will likely have placement programs after you complete the program. They will also give you a foundation of some kind to think about problem solving in a structured environment with instructors, all of which increases the possibility you&#x27;ll have a shot at finding gainful employment.",
      num_comments: null,
      story_id: 31383700,
      story_title: "Ask HN: Self-taught roadmap to multiple big tech offers in a few years?",
      story_url: null,
      parent_id: 31383700,
      created_at_i: 1652573966,
      _tags: [
        "comment",
        "author_yowlingcat",
        "story_31383700"
      ],
      objectID: "31384052",
      _highlightResult: {
        author: {
          value: "yowlingcat",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "It's hard to give advice as you haven't given a sense of what your career and academic history looks like. Some questions:<p>- Are you self taught?<p>- Do you have a bachelor's degree? One in CS?<p>- What does your work history look like; have you been full-time employed at any point since entering the work force or has it always been part time contract work?<p>- Most importantly, why have you only done contract work -- is there something that has prevented you over the course of the last decade from applying to and succeeding in full-time work?<p>- Do you simply not want it, have you tried it and it hasn't worked out, perhaps a combination of the two?<p>Based on that you can determine what your next paths forward are.<p>One approach is applicable if the will to work in a professional capacity is there, as well as the capability, and that all that's missing is that, for lack of a better term, you've been on &quot;sabbatical.&quot; If that's the case, doing work on Toptal/Gun.IO/Facet (probably would recommend any of those over Upwork although it is an option of last resort). You should be able to get a decent stream of contract work that way, sharpen your skills and then eventually move to a FT position from there. The most important thing is to get into a rhythm where you are doing work on a <em>regular</em> basis that is useful to your employer so that you have something of value for when you decide to move.<p>Another approach is taking a reset because you can't do the former. Ways to do a reset include either a bootcamp or an MS program (assuming you have a bachelor's; if not, the bachelor's is an option), as both will likely have placement programs after you complete the program. They will also give you a foundation of some kind to think about problem solving in a structured environment with instructors, all of which increases the possibility you'll have a shot at finding gainful employment.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Ask HN: Self-taught roadmap to multiple big tech offers in a few years?",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T00:12:05.000Z",
      title: null,
      url: null,
      author: "henvic",
      points: null,
      story_text: null,
      comment_text: "uh? I&#x27;m saying &quot;just use regular constants&quot;. The risk of typos is when you&#x27;re defining them, just as much as the risk of defining bad variable values.",
      num_comments: null,
      story_id: 31377025,
      story_title: "Safer Enums in Go",
      story_url: "https://npf.io/2022/05/safer-enums/",
      parent_id: 31379807,
      created_at_i: 1652573525,
      _tags: [
        "comment",
        "author_henvic",
        "story_31377025"
      ],
      objectID: "31383996",
      _highlightResult: {
        author: {
          value: "henvic",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "uh? I'm saying &quot;just use <em>regular</em> constants&quot;. The risk of typos is when you're defining them, just as much as the risk of defining bad variable values.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Safer Enums in Go",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://npf.io/2022/05/safer-enums/",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-15T00:08:56.000Z",
      title: null,
      url: null,
      author: "matheusmoreira",
      points: null,
      story_text: null,
      comment_text: "Z drugs are better than benzodiazepines but not by much. Their pharmacodynamics are similar: they act on the same GABA receptors.<p>Zolpidem is best used for a couple to regularize sleep patterns and help establish proper sleep hygiene. Trazodone at lower doses is better for long term use, especially in older patients.",
      num_comments: null,
      story_id: 31382096,
      story_title: "Long-term benzodiazepine use causes synapse loss and cognitive deficits in mice",
      story_url: "https://scitechdaily.com/long-term-benzodiazepine-xanax-klonopin-ativan-use-destroys-neural-connections-in-the-brain/",
      parent_id: 31382639,
      created_at_i: 1652573336,
      _tags: [
        "comment",
        "author_matheusmoreira",
        "story_31382096"
      ],
      objectID: "31383977",
      _highlightResult: {
        author: {
          value: "matheusmoreira",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "Z drugs are better than benzodiazepines but not by much. Their pharmacodynamics are similar: they act on the same GABA receptors.<p>Zolpidem is best used for a couple to <em>regular</em>ize sleep patterns and help establish proper sleep hygiene. Trazodone at lower doses is better for long term use, especially in older patients.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Long-term benzodiazepine use causes synapse loss and cognitive deficits in mice",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://scitechdaily.com/long-term-benzodiazepine-xanax-klonopin-ativan-use-destroys-neural-connections-in-the-brain/",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-14T23:45:54.000Z",
      title: null,
      url: null,
      author: "jfengel",
      points: null,
      story_text: null,
      comment_text: "Yep, event horizon.<p>The singularity occurs at a nominal point at the center (or a ring for a rotating black hole). It has no volume, but all of the mass ends up there, causing divide by zero errors.",
      num_comments: null,
      story_id: 31377395,
      story_title: "Can we make a black hole? And if we could, what could we do with it?",
      story_url: "http://backreaction.blogspot.com/2022/05/can-we-make-black-hole-and-if-we-could.html",
      parent_id: 31381653,
      created_at_i: 1652571954,
      _tags: [
        "comment",
        "author_jfengel",
        "story_31377395"
      ],
      objectID: "31383825",
      _highlightResult: {
        author: {
          value: "jfengel",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "Yep, event horizon.<p>The <em>singular</em>ity occurs at a nominal point at the center (or a ring for a rotating black hole). It has no volume, but all of the mass ends up there, causing divide by zero errors.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Can we make a black hole? And if we could, what could we do with it?",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "http://backreaction.blogspot.com/2022/05/can-we-make-black-hole-and-if-we-could.html",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-14T23:37:00.000Z",
      title: null,
      url: null,
      author: "karmasimida",
      points: null,
      story_text: null,
      comment_text: "I saw the whole movie and it is a regular coming of age movie as I remembered<p>Don&#x27;t understand what is the fuss about it from the conservatives",
      num_comments: null,
      story_id: 31378710,
      story_title: "Netflix to Employees: If you don't like our content, you can quit",
      story_url: "https://www.wsj.com/articles/netflix-to-employees-if-you-dont-like-our-content-you-can-quit-11652478092",
      parent_id: 31381141,
      created_at_i: 1652571420,
      _tags: [
        "comment",
        "author_karmasimida",
        "story_31378710"
      ],
      objectID: "31383781",
      _highlightResult: {
        author: {
          value: "karmasimida",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "I saw the whole movie and it is a <em>regular</em> coming of age movie as I remembered<p>Don't understand what is the fuss about it from the conservatives",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Netflix to Employees: If you don't like our content, you can quit",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://www.wsj.com/articles/netflix-to-employees-if-you-dont-like-our-content-you-can-quit-11652478092",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-14T23:34:30.000Z",
      title: null,
      url: null,
      author: "the_af",
      points: null,
      story_text: null,
      comment_text: "I think the parent poster means Barbie dolls that look more like regular people. Classic Barbie looks like a model.",
      num_comments: null,
      story_id: 31383388,
      story_title: "Mattel debuts first Barbie with hearing aids",
      story_url: "https://www.cbsnews.com/news/barnie-hearing-aid-mattel/",
      parent_id: 31383723,
      created_at_i: 1652571270,
      _tags: [
        "comment",
        "author_the_af",
        "story_31383388"
      ],
      objectID: "31383762",
      _highlightResult: {
        author: {
          value: "the_af",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "I think the parent poster means Barbie dolls that look more like <em>regular</em> people. Classic Barbie looks like a model.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Mattel debuts first Barbie with hearing aids",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://www.cbsnews.com/news/barnie-hearing-aid-mattel/",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-14T23:33:31.000Z",
      title: null,
      url: null,
      author: "harshreality",
      points: null,
      story_text: null,
      comment_text: "Was the original just regular python, or numpy?<p>The C version wasn&#x27;t GPU-targeted though from your description.  I&#x27;m curious what other implementations would be capable of, for instance julia, maybe gpu-targeted.",
      num_comments: null,
      story_id: 31377262,
      story_title: "Thinking in an array language",
      story_url: "https://github.com/razetime/ngn-k-tutorial/blob/main/c-thinking-in-k.md",
      parent_id: 31383432,
      created_at_i: 1652571211,
      _tags: [
        "comment",
        "author_harshreality",
        "story_31377262"
      ],
      objectID: "31383759",
      _highlightResult: {
        author: {
          value: "harshreality",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "Was the original just <em>regular</em> python, or numpy?<p>The C version wasn't GPU-targeted though from your description.  I'm curious what other implementations would be capable of, for instance julia, maybe gpu-targeted.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Thinking in an array language",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://github.com/razetime/ngn-k-tutorial/blob/main/c-thinking-in-k.md",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-14T23:22:53.000Z",
      title: null,
      url: null,
      author: "elondaits",
      points: null,
      story_text: null,
      comment_text: "S3 promises 99.999999999% durability and 99.99% availability... I&#x27;m not sure regular VPS&#x27;s give any assurance that your data won&#x27;t be lost. I assume in case of HDD failure it&#x27;s up to you to restore data.",
      num_comments: null,
      story_id: 31376241,
      story_title: "Dokku – Free Heroku Alternative",
      story_url: "https://dokku.com/",
      parent_id: 31379851,
      created_at_i: 1652570573,
      _tags: [
        "comment",
        "author_elondaits",
        "story_31376241"
      ],
      objectID: "31383693",
      _highlightResult: {
        author: {
          value: "elondaits",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "S3 promises 99.999999999% durability and 99.99% availability... I'm not sure <em>regular</em> VPS's give any assurance that your data won't be lost. I assume in case of HDD failure it's up to you to restore data.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Dokku – Free Heroku Alternative",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://dokku.com/",
          matchLevel: "none",
          matchedWords: []
        }
      }
    },
    {
      created_at: "2022-05-14T23:19:58.000Z",
      title: null,
      url: null,
      author: "sbierwagen",
      points: null,
      story_text: null,
      comment_text: "All design is compromise.<p>The autoloader is a design decision: it replaces a crew member, so Russian tanks operate with a crew of 3 instead of 4. This makes Russian tanks smaller and lighter. Here&#x27;s a size comparison of the T-72 with the Abrams: <a href=\"https:&#x2F;&#x2F;preview.redd.it&#x2F;mtwtamct1t821.jpg?auto=webp&amp;s=101442557ee04573ec9212a890a8700fa471ccec\" rel=\"nofollow\">https:&#x2F;&#x2F;preview.redd.it&#x2F;mtwtamct1t821.jpg?auto=webp&amp;s=101442...</a><p>For the massed tank-on-tank actions it was meant for, this is <i>good!</i> Smaller targets are harder to hit, and T-72s were supposed to be fighting gun duels against M60s while crossing West Germany, so all the armor is in the front plate. Lighter tanks are cheaper, so you can build more of them, going from 4 crew to 3 means your limited pool of tankers can operate 33% more vehicles in the field. Classic cold war-era doctrine, hard lessons learned from WW2. <a href=\"https:&#x2F;&#x2F;www.rusi.org&#x2F;explore-our-research&#x2F;publications&#x2F;commentary&#x2F;technical-reflections-russias-armoured-fighting-vehicles\" rel=\"nofollow\">https:&#x2F;&#x2F;www.rusi.org&#x2F;explore-our-research&#x2F;publications&#x2F;comme...</a> (It makes regular operations like tank maintenance or replacing damaged tracks way harder, but oh well, nobody ever said being Russian was easy)<p>Separately, there is no particular reason to think Abrams tanks wouldn&#x27;t be vulnerable to the same weapons, if the Russians had that tank today and were fielding them in the same way they&#x27;re operating their own tanks. Abrams also has light top armor and no ERA tiles on the roof. An anti-tank grenade dropped by a drone on an Abrams ammo compartment would mission kill it instead of killing the crew, but it would still be out of operation. AFAIK, no Abrams are equipped with Trophy in significant numbers, so it would be just as vulnerable to Javelin or other top attack ATGMs.<p>Tanks are vulnerable from the air, so you need air supremacy; vulnerable to artillery, so you need counterbattery suppression; vulnerable to man-portable AT weapons, so you need dismounted infantry combined arms; vulnerable to AT mines, so you need demining combat engineers, perimeter security so UKR spec ops can&#x27;t cross lines and plant them, and military police so enforce civilian curfews. Russia is doing none of this, partly due to incompetence, and partly because they just didn&#x27;t have a big enough force. (Desert Storm took just a hair under a million troops!)<p>If Russia had Abrams, but held all else equal, we&#x27;d still be seeing hundreds of flaming wrecks on the nightly news.",
      num_comments: null,
      story_id: 31382372,
      story_title: "Shaped Charges – Sheet of copper going through 1ft of solid steel (2010) [video]",
      story_url: "https://www.youtube.com/watch?v=K-3cTsvI7ss",
      parent_id: 31383212,
      created_at_i: 1652570398,
      _tags: [
        "comment",
        "author_sbierwagen",
        "story_31382372"
      ],
      objectID: "31383670",
      _highlightResult: {
        author: {
          value: "sbierwagen",
          matchLevel: "none",
          matchedWords: []
        },
        comment_text: {
          value: "All design is compromise.<p>The autoloader is a design decision: it replaces a crew member, so Russian tanks operate with a crew of 3 instead of 4. This makes Russian tanks smaller and lighter. Here's a size comparison of the T-72 with the Abrams: <a href=\"https://preview.redd.it/mtwtamct1t821.jpg?auto=webp&amp;s=101442557ee04573ec9212a890a8700fa471ccec\" rel=\"nofollow\">https://preview.redd.it/mtwtamct1t821.jpg?auto=webp&amp;s=101442...</a><p>For the massed tank-on-tank actions it was meant for, this is <i>good!</i> Smaller targets are harder to hit, and T-72s were supposed to be fighting gun duels against M60s while crossing West Germany, so all the armor is in the front plate. Lighter tanks are cheaper, so you can build more of them, going from 4 crew to 3 means your limited pool of tankers can operate 33% more vehicles in the field. Classic cold war-era doctrine, hard lessons learned from WW2. <a href=\"https://www.rusi.org/explore-our-research/publications/commentary/technical-reflections-russias-armoured-fighting-vehicles\" rel=\"nofollow\">https://www.rusi.org/explore-our-research/publications/comme...</a> (It makes <em>regular</em> operations like tank maintenance or replacing damaged tracks way harder, but oh well, nobody ever said being Russian was easy)<p>Separately, there is no particular reason to think Abrams tanks wouldn't be vulnerable to the same weapons, if the Russians had that tank today and were fielding them in the same way they're operating their own tanks. Abrams also has light top armor and no ERA tiles on the roof. An anti-tank grenade dropped by a drone on an Abrams ammo compartment would mission kill it instead of killing the crew, but it would still be out of operation. AFAIK, no Abrams are equipped with Trophy in significant numbers, so it would be just as vulnerable to Javelin or other top attack ATGMs.<p>Tanks are vulnerable from the air, so you need air supremacy; vulnerable to artillery, so you need counterbattery suppression; vulnerable to man-portable AT weapons, so you need dismounted infantry combined arms; vulnerable to AT mines, so you need demining combat engineers, perimeter security so UKR spec ops can't cross lines and plant them, and military police so enforce civilian curfews. Russia is doing none of this, partly due to incompetence, and partly because they just didn't have a big enough force. (Desert Storm took just a hair under a million troops!)<p>If Russia had Abrams, but held all else equal, we'd still be seeing hundreds of flaming wrecks on the nightly news.",
          matchLevel: "full",
          fullyHighlighted: false,
          matchedWords: [
            "angular"
          ]
        },
        story_title: {
          value: "Shaped Charges – Sheet of copper going through 1ft of solid steel (2010) [video]",
          matchLevel: "none",
          matchedWords: []
        },
        story_url: {
          value: "https://www.youtube.com/watch?v=K-3cTsvI7ss",
          matchLevel: "none",
          matchedWords: []
        }
      }
    }
  ]
