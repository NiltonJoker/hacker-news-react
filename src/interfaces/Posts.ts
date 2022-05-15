export interface HitResponse {
  hits:             Hit[];
  nbHits:           number;
  page:             number;
  nbPages:          number;
  hitsPerPage:      number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo:   boolean;
  query:            string;
  params:           string;
  processingTimeMS: number;
}

export interface Hit {
  created_at:       string;
  title:            null | string;
  url:              null | string;
  author:           string;
  points:           number | null;
  story_text:       null;
  comment_text:     null | string;
  num_comments:     number | null;
  story_id:         number | null;
  story_title:      null | string;
  story_url:        null | string;
  parent_id:        number | null;
  created_at_i:     number;
  _tags:            string[];
  objectID:         string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  author:        Author;
  comment_text?: Author;
  story_title?:  Author;
  story_url?:    Author;
  title?:        Author;
  url?:          Author;
}

export interface Author {
  value:             string;
  matchLevel:        string;
  matchedWords:      string[] | [];
  fullyHighlighted?: boolean;
}

