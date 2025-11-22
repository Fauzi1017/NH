export type Language = 'id' | 'en' | 'jp';

export const translations = {
  id: {
    nav: {
      home: 'Home',
      learn: 'Belajar',
      culture: 'Budaya',
      tips: 'Tips',
      articles: 'Artikel',
      about: 'Tentang',
      contact: 'Kontak',
      start: 'Mulai Belajar'
    },
    hero: {
      tagline: 'Platform Belajar Jepang #1',
      title_pre: 'Jembatani Dunia Anda dengan',
      title_highlight: 'Jepang',
      title_post: '',
      subtitle: 'Pelajari bahasa, pahami budaya, dan temukan rahasia kehidupan di Jepang. Nande Nihon menyajikan konten berkualitas yang dikurasi khusus untuk Anda.',
      cta_start: 'Mulai Belajar',
      cta_explore: 'Jelajahi Budaya'
    },
    sections: {
      why_title: 'Mengapa Nande Nihon',
      explore_topics: 'Jelajahi Topik',
      learn_lang: 'Belajar Bahasa',
      learn_sub: 'Hiragana, Katakana, Kanji, & Grammar',
      culture_art: 'Budaya & Seni',
      culture_sub: 'Matsuri, Sejarah, & Tradisi',
      life_japan: 'Life in Japan',
      life_sub: 'Travel, Work, & Daily Life',
      latest_articles: 'Artikel Terbaru',
      latest_sub: 'Update terkini seputar Jepang',
      view_all: 'Lihat Semua'
    },
    newsletter: {
      title: 'Newsletter',
      desc: 'Dapatkan tips belajar dan info budaya Jepang terbaru langsung ke inbox Anda.',
      placeholder: 'Email Anda',
      button: 'Gabung',
      success: 'Terima kasih telah berlangganan!'
    },
    footer: {
      desc: 'Platform pembelajaran bahasa dan budaya Jepang yang didedikasikan untuk membawa semangat Jepang ke dalam keseharian Anda.',
      menu: 'Menu',
      connect: 'Terhubung',
      rights: 'All rights reserved.'
    },
    pages: {
      belajar: {
        title: 'Belajar Bahasa Jepang',
        desc: 'Mulai dari Hiragana dasar hingga percakapan tingkat lanjut. Kami menyusun materi agar mudah dipahami.',
        levels: { n5: 'Pemula', n4: 'Dasar', n3: 'Menengah', n2: 'Lanjut' },
        latest: 'Materi Terbaru'
      },
      budaya: {
        title: 'Budaya Jepang',
        subtitle: 'Tradisi, Festival, dan Seni Modern'
      },
      tips: {
        title: 'Tips Hidup di Jepang',
        subtitle: 'Lifehacks untuk turis maupun resident.'
      },
      artikel: {
        title: 'Semua Artikel',
        search_placeholder: 'Cari artikel...',
        not_found: 'Tidak ada artikel ditemukan.'
      },
      tentang: {
        title: 'Tentang Nande Nihon',
        p1: 'Nande Nihon (なんで日本) lahir dari pertanyaan sederhana: "Kenapa Jepang?"',
        p2: 'Kenapa kita begitu terpesona dengan budayanya? Kenapa bahasanya begitu unik? Kenapa orang-orangnya begitu disiplin?',
        p3: 'Platform ini didirikan pada tahun 2024 sebagai jembatan bagi pembelajar bahasa Jepang di Indonesia. Kami percaya bahwa belajar bahasa tidak bisa dipisahkan dari pemahaman budayanya.',
        mission: 'Misi Kami',
        m1: 'Menyediakan materi bahasa Jepang yang gratis, mudah diakses, dan terstruktur.',
        m2: 'Memperkenalkan sisi autentik budaya Jepang, bukan hanya stereotip.',
        m3: 'Membangun komunitas pembelajar yang saling mendukung.',
        quote: '"Seribu langkah dimulai dengan satu langkah pertama. Mulailah perjalanan bahasa Jepangmu hari ini."'
      },
      kontak: {
        title: 'Hubungi Kami',
        desc: 'Punya pertanyaan tentang materi pelajaran, kemitraan, atau sekadar ingin menyapa? Kami siap mendengar dari Anda.',
        office: 'Kantor',
        form: {
          name: 'Nama Lengkap',
          email: 'Email',
          message: 'Pesan',
          send: 'Kirim Pesan',
          sending: 'Mengirim...',
          sent_title: 'Pesan Terkirim!',
          sent_desc: 'Kami akan membalas secepatnya.',
          send_again: 'Kirim pesan lagi'
        }
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      learn: 'Learn',
      culture: 'Culture',
      tips: 'Tips',
      articles: 'Articles',
      about: 'About',
      contact: 'Contact',
      start: 'Start Learning'
    },
    hero: {
      tagline: '#1 Japanese Learning Platform',
      title_pre: 'Bridge Your World with',
      title_highlight: 'Japan',
      title_post: '',
      subtitle: 'Learn the language, understand the culture, and discover the secrets of life in Japan. Nande Nihon provides curated content just for you.',
      cta_start: 'Start Learning',
      cta_explore: 'Explore Culture'
    },
    sections: {
      why_title: 'Why Nande Nihon',
      explore_topics: 'Explore Topics',
      learn_lang: 'Learn Language',
      learn_sub: 'Hiragana, Katakana, Kanji, & Grammar',
      culture_art: 'Culture & Arts',
      culture_sub: 'Matsuri, History, & Traditions',
      life_japan: 'Life in Japan',
      life_sub: 'Travel, Work, & Daily Life',
      latest_articles: 'Latest Articles',
      latest_sub: 'Latest updates about Japan',
      view_all: 'View All'
    },
    newsletter: {
      title: 'Newsletter',
      desc: 'Get the latest learning tips and Japanese cultural info straight to your inbox.',
      placeholder: 'Your Email',
      button: 'Join',
      success: 'Thanks for subscribing!'
    },
    footer: {
      desc: 'A Japanese language and culture learning platform dedicated to bringing the spirit of Japan into your daily life.',
      menu: 'Menu',
      connect: 'Connect',
      rights: 'All rights reserved.'
    },
    pages: {
      belajar: {
        title: 'Learn Japanese',
        desc: 'From basic Hiragana to advanced conversation. We structure materials to be easily understood.',
        levels: { n5: 'Beginner', n4: 'Basic', n3: 'Intermediate', n2: 'Advanced' },
        latest: 'Latest Materials'
      },
      budaya: {
        title: 'Japanese Culture',
        subtitle: 'Traditions, Festivals, and Modern Art'
      },
      tips: {
        title: 'Tips for Living in Japan',
        subtitle: 'Lifehacks for tourists and residents alike.'
      },
      artikel: {
        title: 'All Articles',
        search_placeholder: 'Search articles...',
        not_found: 'No articles found.'
      },
      tentang: {
        title: 'About Nande Nihon',
        p1: 'Nande Nihon (なんで日本) was born from a simple question: "Why Japan?"',
        p2: 'Why are we so fascinated by its culture? Why is the language so unique? Why are the people so disciplined?',
        p3: 'Founded in 2024 as a bridge for Japanese learners. We believe language learning cannot be separated from cultural understanding.',
        mission: 'Our Mission',
        m1: 'Provide free, accessible, and structured Japanese language materials.',
        m2: 'Introduce the authentic side of Japanese culture, not just stereotypes.',
        m3: 'Build a supportive community of learners.',
        quote: '"A journey of a thousand miles begins with a single step. Start your Japanese journey today."'
      },
      kontak: {
        title: 'Contact Us',
        desc: 'Have questions about lessons, partnerships, or just want to say hi? We are ready to hear from you.',
        office: 'Office',
        form: {
          name: 'Full Name',
          email: 'Email',
          message: 'Message',
          send: 'Send Message',
          sending: 'Sending...',
          sent_title: 'Message Sent!',
          sent_desc: 'We will reply as soon as possible.',
          send_again: 'Send another message'
        }
      }
    }
  },
  jp: {
    nav: {
      home: 'ホーム',
      learn: '学習',
      culture: '文化',
      tips: 'ヒント',
      articles: '記事',
      about: '概要',
      contact: '連絡先',
      start: '学習を始める'
    },
    hero: {
      tagline: 'No.1 日本語学習プラットフォーム',
      title_pre: 'あなたの世界を',
      title_highlight: '日本',
      title_post: '',
      subtitle: '言語を学び、文化を理解し、日本の生活の秘密を発見しましょう。Nande Nihonはあなたのために厳選されたコンテンツを提供します。',
      cta_start: '学習を始める',
      cta_explore: '文化を探索'
    },
    sections: {
      why_title: 'Nande Nihonを選ぶ理由',
      explore_topics: 'トピックを探索',
      learn_lang: '言語を学ぶ',
      learn_sub: 'ひらがな、カタカナ、漢字、文法',
      culture_art: '文化と芸術',
      culture_sub: '祭り、歴史、伝統',
      life_japan: '日本の生活',
      life_sub: '旅行、仕事、日常生活',
      latest_articles: '最新記事',
      latest_sub: '日本に関する最新情報',
      view_all: 'すべて見る'
    },
    newsletter: {
      title: 'ニュースレター',
      desc: '最新の学習のヒントや日本文化の情報をメールで受け取りましょう。',
      placeholder: 'メールアドレス',
      button: '参加する',
      success: '登録ありがとうございます！'
    },
    footer: {
      desc: '日本の精神をあなたの日常生活に取り入れることに特化した、日本語と文化の学習プラットフォーム。',
      menu: 'メニュー',
      connect: 'つながる',
      rights: 'All rights reserved.'
    },
    pages: {
      belajar: {
        title: '日本語を学ぶ',
        desc: '基本的なひらがなから高度な会話まで。わかりやすく構成されています。',
        levels: { n5: '入門', n4: '初級', n3: '中級', n2: '上級' },
        latest: '最新の教材'
      },
      budaya: {
        title: '日本文化',
        subtitle: '伝統、祭り、現代アート'
      },
      tips: {
        title: '日本での生活のヒント',
        subtitle: '観光客や居住者のためのライフハック。'
      },
      artikel: {
        title: 'すべての記事',
        search_placeholder: '記事を検索...',
        not_found: '記事が見つかりません。'
      },
      tentang: {
        title: 'Nande Nihonについて',
        p1: 'Nande Nihon（なんで日本）は、「なぜ日本なのか？」という単純な疑問から生まれました。',
        p2: 'なぜ私たちはその文化に魅了されるのか？なぜ言語はそんなにユニークなのか？なぜ人々は規律正しいのか？',
        p3: '2024年に日本語学習者の架け橋として設立されました。言語学習は文化理解と切り離せないと信じています。',
        mission: '私たちの使命',
        m1: '無料かつアクセスしやすく、体系的な日本語教材を提供する。',
        m2: 'ステレオタイプだけでなく、日本の本物の側面を紹介する。',
        m3: '互いに支え合う学習者のコミュニティを構築する。',
        quote: '「千里の道も一歩から。今日から日本語の旅を始めましょう。」'
      },
      kontak: {
        title: 'お問い合わせ',
        desc: 'レッスンやパートナーシップについての質問、または単なる挨拶ですか？ご連絡をお待ちしております。',
        office: 'オフィス',
        form: {
          name: '氏名',
          email: 'メールアドレス',
          message: 'メッセージ',
          send: '送信する',
          sending: '送信中...',
          sent_title: '送信完了！',
          sent_desc: 'できるだけ早く返信いたします。',
          send_again: '別のメッセージを送信'
        }
      }
    }
  }
};