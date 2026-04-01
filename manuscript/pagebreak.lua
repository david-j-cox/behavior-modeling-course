-- pagebreak.lua
-- Pandoc Lua filter to convert ::: pagebreak ::: divs into Word page breaks
-- Usage: pandoc input.md -o output.docx --lua-filter=pagebreak.lua

function Div(el)
  if el.classes[1] == "pagebreak" then
    if FORMAT:match "docx" or FORMAT:match "odt" then
      return pandoc.RawBlock("openxml",
        "<w:p><w:r><w:br w:type=\"page\"/></w:r></w:p>")
    elseif FORMAT:match "html" then
      return pandoc.RawBlock("html",
        "<div style=\"page-break-after: always;\"></div>")
    elseif FORMAT:match "latex" then
      return pandoc.RawBlock("latex", "\\newpage")
    else
      return el
    end
  end
end
