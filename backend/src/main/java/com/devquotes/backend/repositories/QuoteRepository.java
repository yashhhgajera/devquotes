package com.devquotes.backend.repositories;

import com.devquotes.backend.models.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.UUID;

public interface QuoteRepository extends JpaRepository<Quote, UUID> {

    @Query("SELECT q FROM Quote q ORDER BY q.votes DESC")
    List<Quote> findTopQuotes(Pageable pageable);

    @Query(value = "SELECT * FROM Quote ORDER BY RANDOM() LIMIT 1", nativeQuery = true)
    Quote getRandomQuote();

}
