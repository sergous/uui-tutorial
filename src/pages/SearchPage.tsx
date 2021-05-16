import React, { useState } from "react";
import { Button, FlexCell, FlexRow, SearchInput } from "@epam/promo";
import { Panel, RichTextView } from "@epam/loveship";
import css from "./SearchPage.module.scss";
import { SearchResult, svc } from "../services";

export function SearchPage() {
  const [value, onValueChange] = useState("");
  // const searchResults = svc.getSearchResults();
  const searchResults = svc.searchResults as SearchResult[];

  return (
    <>
      <Panel shadow cx={css.mainPanel} background="white">
        <FlexRow>
          <SearchInput
            value={value}
            onValueChange={onValueChange}
            placeholder="Type for search"
            debounceDelay={1000}
          />
          <FlexCell width={100}>
            <Button caption="Find" />
          </FlexCell>
        </FlexRow>

        <ol className={css.searchResults}>
          {searchResults.map(({ name, url, text }) => (
            <RichTextView>
              <li key={name}>
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
