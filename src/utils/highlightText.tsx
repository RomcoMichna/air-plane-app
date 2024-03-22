export function highlightText(text: string) { 
    const regex = /(BKN|FEW|SCT)(\d{3})/g;
    let match;
    let lastIndex = 0;
    const highlightedParts = [];
    
    while ((match = regex.exec(text)) !== null) {
      const expression = match[1];
      const number = match[2];
      const color = parseInt(number, 10) > 30 ? "red" : "blue";
  
      highlightedParts.push(
        <span key={lastIndex}>
          {text.substring(lastIndex, match.index)}
          <span style={{ color }}>{expression}{number}</span>
        </span>
      );
  
      lastIndex = regex.lastIndex;
    }
  
    highlightedParts.push(
      <span key={lastIndex}>
        {text.substring(lastIndex)}
      </span>
    );
    return highlightedParts;
  }