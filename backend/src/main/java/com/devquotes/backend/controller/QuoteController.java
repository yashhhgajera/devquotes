package com.devquotes.backend.controller;

import com.devquotes.backend.models.Quote;
import com.devquotes.backend.models.VoteTypeEnum;
import com.devquotes.backend.services.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/quotes")
public class QuoteController {

    @Autowired
    public final QuoteService quoteService;

    public QuoteController(QuoteService quoteService) {
        this.quoteService = quoteService;
    }

    @PostMapping
    public Quote addQuote(@RequestBody Quote quote){
        return quoteService.addQuote(quote);
    }

    @GetMapping("/random")
    public Quote getRandomQuote(){
        return quoteService.getRandomQuote();
    }

    @PutMapping("/{id}/vote")
    public Quote voteQuote(@PathVariable UUID id, @RequestParam VoteTypeEnum voteType){
        return quoteService.voteQuote(id,voteType);
    }

    @GetMapping("/top")
    public List<Quote> getTopQuotes(@RequestParam(defaultValue = "10") int limit) {
        return quoteService.getTopQuotes(limit);
    }

    @GetMapping()
    public List<Quote> getAllQuotes(){
        return quoteService.getAllQuotes();
    }



}
