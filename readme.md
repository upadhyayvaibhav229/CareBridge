@media (max-width: 575px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-left p {
    width: 100%;
  }

  .footer-quick-links {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .footer-contact p {
    justify-content: center;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .footer-content {
    padding: 0 3rem;
  }

  .footer-quick-links {
    gap: 6rem;
  }

  .footer-left p {
    width: 270px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
  }

  .footer-quick-links {
    flex-direction: row;
    gap: 4rem;
  }

  .footer-left p {
    width: 250px;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-left p {
    width: 80%;
  }

  .footer-quick-links {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}
