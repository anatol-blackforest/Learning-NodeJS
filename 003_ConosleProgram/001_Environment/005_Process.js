// Объект process является глобальным и всегда доступен, без подключения модулей.
// Этот объект предоставляет информацию и позволяет управлять текущим процессом

// Свойство хранит информацию о архитектуре процессора
console.log(process.arch);

// Свойство хранит путь по которому запускается Node js, путь по которому находится исполняемый файл, и аргументы командной строки
console.log(process.argv);
// возвразает обьект с информацией о конфигурации текущего файла 
console.log(process.config);
// метод возвращает рабочую директорию текущего процесса 
console.log(process.cwd());
// метод возвращает информацию о текущей среде выполнения
console.log(process.env);
// возвращает информацию об использовании памяти 
console.log(process.memoryUsage());
// {
//   rss: 4935680,              - 
//   heapTotal: 1826816,        - используемая движком V8, память
//   heapUsed: 650472,          - используемая движком V8, память
//   external: 49879            - память используемая внешними библиотеками
// }