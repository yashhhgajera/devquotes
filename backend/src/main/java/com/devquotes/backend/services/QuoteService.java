package com.devquotes.backend.services;

import com.devquotes.backend.models.Quote;
import com.devquotes.backend.models.VoteTypeEnum;
import com.devquotes.backend.repositories.QuoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

@Service
public class QuoteService {

    private final QuoteRepository quoteRepository;

    public QuoteService(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    public Quote addQuote(Quote quote){
        return quoteRepository.save(quote);
    }

    public Quote getRandomQuote(){
        return quoteRepository.getRandomQuote();
    }

    public Quote voteQuote(UUID id, VoteTypeEnum voteType){
        Quote quote = quoteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Quote not found with id: " + id));

        if (voteType == VoteTypeEnum.UP) {
            quote.setVotes(quote.getVotes() + 1);
        } else if (voteType == VoteTypeEnum.DOWN) {
            quote.setVotes(quote.getVotes() - 1);
        }

        return quoteRepository.save(quote);
    }

    public List<Quote> getTopQuotes(){
        return quoteRepository.findAll();
    }

}
