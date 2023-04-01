import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article, ArticleBlockType, ArticleType } from 'entities/Article';
import { getArticleDetailsData } from './GetArticleDetailsData/GetArticleDetailsData';
import { getArticleDetailsIsLoading } from './GetArticleDetailsIsLoading/GetArticleDetailsIsLoading';
import { getArticleDetailsError } from './GetArticleDetailsError/GetArticleDetailsError';

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    }
  ]
};
describe('Test for GetArticleDetailsData', () => {
  test('should fetch Article from store if it is present', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        data: article
      }
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
  });

  test('should return "undefined" if it is absent', () => {
    const state: DeepPartial<StateSchema> = {
      article: undefined
    };
    expect(getArticleDetailsData(state as StateSchema)).toBeUndefined();
  });

  test('should return error from store if it is present', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        error: 'error'
      }
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should return "undefined" if error is absent', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        error: undefined
      }
    };
    expect(getArticleDetailsError(state as StateSchema)).toBeUndefined();
  });

  test('should return "isLoading" boolean flag = true from store if it is present & equal "true"', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true
      }
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return "isLoading" boolean flag = false from store if it is present & equal "false"', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: false
      }
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return "isLoading" = false from store by default', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
});
