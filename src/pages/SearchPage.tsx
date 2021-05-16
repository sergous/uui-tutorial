import React, { useState } from "react";
import { Button, FlexCell, FlexRow, SearchInput } from "@epam/promo";
import { Panel, RichTextView } from "@epam/loveship";
import css from "./SearchPage.module.scss";
import { SearchResult, svc } from "../services";

export function SearchPage() {
  const [searchQuery, onSearchQueryChange] = useState("");
  const [searchResults, onSearchResultsChange] = useState([] as SearchResult[]);

  const updateSearchResults = async (query = searchQuery) => {
    const filtered = (await svc.getSearchResults(query)) as SearchResult[];
    onSearchResultsChange(filtered);
  };

  const onSearchQueryUpdate = (updatedSearchQuery: string) => {
    onSearchQueryChange(updatedSearchQuery);
    updateSearchResults(updatedSearchQuery);
  };

  const handleSeachEnter = (e: KeyboardEvent) => {
    if (e!.key != "Enter") return;

    updateSearchResults();
  };

  return (
    <>
      <Panel shadow cx={css.mainPanel} background="white">
        <FlexRow>
          <SearchInput
            value={searchQuery}
            onValueChange={onSearchQueryUpdate}
            onBlur={() => updateSearchResults()}
            onCancel={() => onSearchQueryUpdate("")}
            onKeyDown={handleSeachEnter}
            placeholder="Type for search"
            // disableDebounce={true}
            debounceDelay={500}
          />
          <FlexCell width={100}>
            <Button caption="Find" onClick={() => updateSearchResults()} />
          </FlexCell>
        </FlexRow>
        <ol className={css.searchResults}>
          {searchResults.map(({ id, name, url, text }) => (
            <RichTextView key={id}>
              <li>
                <h3>
                  <a href={url}>{name}</a>
                </h3>
                <p>{text}</p>
              </li>
            </RichTextView>
          ))}
        </ol>
      </Panel>
    </>
  );
}
