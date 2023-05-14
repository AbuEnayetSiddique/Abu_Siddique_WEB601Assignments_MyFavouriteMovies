import { Content } from './content-interface';

class ContentList {
  private contents: Content[];

  constructor() {
    this.contents = [];
  }

  get contentArray(): Content[] {
    return this.contents;
  }

  addContent(content: Content): void {
    this.contents.push(content);
  }

  getContentCount(): number {
    return this.contents.length;
  }

  getContentHTML(index: number): string {
    if (index < 0 || index >= this.contents.length) {
      return `<div><p>Invalid index ${index}. Please provide a valid index.</p></div>`;
    }

    const content = this.contents[index];

    const imageTag = content.imgURL
      ? `<img src="${content.imgURL}" alt="${content.title}"/>`
      : '';

    return `
      <div>
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <p>Creator: ${content.creator}</p>
        ${imageTag}
        <p>Type: ${content.type ?? 'Unknown'}</p>
      </div>
    `;
  }
}

export { ContentList };